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
      console.log("test");
      console.log(req.body.values);
      try {
        const {
          blogauthername,
          blogtitile,
          ckEditorValue,
          imageAlt,
          imagetitle,
          metaDesc,
          metakeywords,
          metatitle,
          blogImage = imageAlt,
          permalink,
        } = req.body.values;
        const note = await blogpost.create({
          metaTitle: metatitle,
          metaDescription: metaDesc,
          metaKeywords: metakeywords,
          blogTitle: blogtitile,
          permalink,
          blogImage: blogImage,
          blogDesc: ckEditorValue,
          images: {
            imageAlt,
            imageTitle: imagetitle,
          },
          blogAutherName: blogauthername,
        });

        if (!note) {
          return res.status(500).json({
            error: "Internal Server Error",
          });
        }
        res.status(201).json({
          success: true,
          data: note,
        });
      } catch (error) {
        res.status(400).json({ success: false, data: error.message });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
