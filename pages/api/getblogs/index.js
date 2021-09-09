// import { authenticateAuthToken } from "../../../middlewares/auth";
// import { runMiddleware } from "../../../middlewares/runMiddleware";
// import passport from 'passport'
import blogpost from "../../../models/blogpost";
console.log("blogpost", process.env.DEV_APP);
export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      // ->to check wether user has authentication token
      //   await runMiddleware(req, res, authenticateAuthToken);
      //   if (req.error) return res.status(401).json(req.error);
      const allblogs = await blogpost.find({});
      return res.status(200).json({ allblogs });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
