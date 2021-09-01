const mongoose = require("mongoose");
const mongoTenant = require("../utils/mongo-tenant");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    metaTitle: String,
    metaDescription: String,
    metaKeywords: String,
    title: String,
    permalink: String,
    featuredImage: String,
    images: {
      imageUrl: String,
      imageAlt: String,
      imageTitle: String,
      imageCaption: String,
    },
  },
  { timestamps: true }
);

schema.plugin(mongoTenant);

const blogpost = mongoose.models.blogpost || mongoose.model("blogpost", schema);
module.exports = blogpost;
