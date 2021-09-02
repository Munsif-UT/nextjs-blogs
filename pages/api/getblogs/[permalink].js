// import { authenticateAuthToken } from "../../../middlewares/auth";
// import { runMiddleware } from "../../../middlewares/runMiddleware";
// import passport from 'passport'
import blogpost from "../../../models/blogpost";
export default async function handler(req, res) {
  const {
    query: { permalink },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        // await runMiddleware(req, res, authenticateAuthToken); // --> to authenticate the user
        const blog = await blogpost.findOne({ permalink });

        if (!blog) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: blog });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
