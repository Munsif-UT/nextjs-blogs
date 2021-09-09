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
apiRoute.put(async (req, res) => {
  try {
    // await runMiddleware(req, res, authenticateAuthToken);
    const { id } = req.query;
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
    var blog;

    if (req.file || req.files) {
      blog = await blogpost.findByIdAndUpdate(
        id,
        {
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
        },
        {
          new: true,
          runValidators: true,
        }
      );
    } else {
      blog = await blogpost.findByIdAndUpdate(
        id,
        {
          metaTitle: metatitle,
          metaDescription: metaDesc,
          metaKeywords: metakeywords,
          blogTitle: blogtitile,
          permalink,
          // blogImage: req.file.originalname,
          blogDesc: ckEditorValue,
          images: {
            imageAlt,
            imageTitle: imagetitle,
          },
          blogAutherName: blogauthername,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }

    if (!blog) {
      return res.status(400).json({ success: false, data: "not found" });
    }

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res
      .status(400)
      .json({
        success: false,
        data: "not found in catc",
        errors: error.message,
      });
  }
});
apiRoute.get(async (req, res) => {
  try {
    // await runMiddleware(req, res, authenticateAuthToken); // --> to authenticate the user
    const { id } = req.query;
    const blog = await blogpost.findById(id);

    if (!blog) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});
apiRoute.delete(async (req, res) => {
  try {
    // await runMiddleware(req, res, authenticateAuthToken);
    const { id } = req.query;
    const deletedBlog = await blogpost.deleteOne({ _id: id });

    if (!deletedBlog) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});
export default apiRoute;
