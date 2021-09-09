import { authenticateAuthToken } from "../../../middlewares/auth";
import { runMiddleware } from "../../../middlewares/runMiddleware";
// import passport from 'passport'
import blogpost from "../../../models/blogpost";
import nextConnect from "next-connect";
import multer from "multer";
/* multer image upload */
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});
/* multer image upload */

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
const uploadMiddleware = upload.single("blogImage");
apiRoute.use(uploadMiddleware);
apiRoute.post(async (req, res) => {
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
      permalink,
    } = req.body;
    const note = await blogpost.create({
      metaTitle: metatitle,
      metaDescription: metaDesc,
      metaKeywords: metakeywords,
      blogTitle: blogtitile,
      permalink,
      blogImage: req.file.originalname,
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
      data: req.body.blogImage,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});
apiRoute.get(async (req, res) => {
  try {
    // ->to check wether user has authentication token
    // await runMiddleware(req, res, authenticateAuthToken);
    //   if (req.error) return res.status(401).json(req.error);
    const allblogs = await blogpost.find({});
    return res.status(200).json({ allblogs });
  } catch (error) {
    res.json({ error: error.message });
  }
});
export default apiRoute;
