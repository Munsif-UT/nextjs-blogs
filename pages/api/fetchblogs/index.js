import { authenticateAuthToken } from "../../../middlewares/auth";
import { runMiddleware } from "../../../middlewares/runMiddleware";
// import passport from 'passport'
import blogpost from "../../../models/blogpost";
export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      // ->to check wether user has authentication token
      await runMiddleware(req, res, authenticateAuthToken);
      //   if (req.error) return res.status(401).json(req.error);
      const allblogs = await blogpost.find({});
      return res.status(200).json({ allblogs });
      break;
    case "POST":
      try {
        const note = await blogpost.create(req.body);

        res.status(201).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
