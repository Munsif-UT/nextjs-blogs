const express = require("express");
const cors = require("cors");
const passport = require("passport");
const logger = require("morgan");
const Users = require("../models/users");
const LocalStrategy = require("passport-local");
const { Strategy: JWTstrategy, ExtractJwt } = require("passport-jwt");

const applyMiddlewares = (app) => {
  // app.use(function (req, res, next) {

  //   res.header('Access-Control-Allow-Credentials', true);
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  //   res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  //   next();
  // });
  app.use(cors());
  app.use(express.json({ limit: "50mb" }));
  app.use(express.json());
  app.use(logger("common"));
  app.use(passport.initialize());
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        try {
          const user = await Users.findOne({ email });
          if (!user) {
            return done(null, false, {
              error: "This email does not exist, Please try again.",
            });
          }
          if (!user.password) {
            return done(null, false, {
              error: "Password is invalid, Please try again.",
            });
          }
          const isValid = user.validatePassword(password);
          if (!isValid) {
            return done(null, false, {
              error: "Password is invalid, Please try again.",
            });
          }
          if (!user.isVerified) {
            return done(null, false, {
              error: "Please verify your email.",
            });
          }
          user.rememberMe = req.body.rememberMe;
          return done(null, user);
        } catch (err) {
          done(err);
        }
      }
    )
  );

  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.JWT_SECRET;
  passport.use(
    new JWTstrategy(opts, async (jwtPayload, done) => {
      try {
        const user = await Users.findById(jwtPayload._id);
        if (!user || (!user.isVerified && !jwtPayload.verify))
          return done(null, false);
        return done(null, user);
      } catch (err) {
        done(err, false);
      }
    })
  );
};

module.exports = applyMiddlewares;
