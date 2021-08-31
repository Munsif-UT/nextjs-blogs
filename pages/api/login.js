import { generateTokenResponse } from "../../middlewares/auth"
import { runMiddleware } from "../../middlewares/runMiddleware"
import passport from 'passport'
// import User from "../../models/users"

const loginCheck = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (!user) {
        req.error = info.error;
      } else req.user = user;
      next()
    })(req, res, next);
  }


export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
        case 'POST':
            await runMiddleware(req, res, loginCheck)
            let token = generateTokenResponse(req.user)
            if (req.error) return res.status(401).json(req.error)
            return res.status(200).json({ ...token });
            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}