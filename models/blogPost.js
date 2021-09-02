const mongoose = require("mongoose");
const mongoTenant = require("../utils/mongo-tenant");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    metaTitle: String,
    metaDescription: String,
    metaKeywords: String,
    blogTitle: String,
    permalink: String,
    blogImage: String,
    blogDesc: String,
    images: {
      imageAlt: String,
      imageTitle: String,
    },
    blogAutherName: {
      type: String,
    },
  },
  { timestamps: true }
);

schema.plugin(mongoTenant);

const blogpost = mongoose.models.blogpost || mongoose.model("blogpost", schema);
module.exports = blogpost;
