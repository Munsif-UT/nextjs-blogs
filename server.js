// app.js

const setupDatabase = require("./config/setupDatabase");
const populateDB = require("./config/populateDB");
const applyMiddlewares = require("./middlewares");
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// ADD THIS
// var cors = require("cors");
// app.use(cors());
nextApp.prepare().then(() => {
  const app = express();
  setupDatabase();
  applyMiddlewares(app);
  populateDB();

  app.get("*", (req, res) => {
    return handle(req, res);
  });
  app.post("*", (req, res) => {
    return handle(req, res);
  });
  app.put("*", (req, res) => {
    return handle(req, res);
  });
  app.delete("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(3000, (err) => {
    if (err) throw err;
    console.info(`> Ready on http://localhost:${3000}`);
  });
});
