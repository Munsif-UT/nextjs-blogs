const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { role } = require("../enumerations");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    tenantId: String,
    role: {
      type: String,
      enum: Object.values(role),
      default: role.Blogger,
    },
    createdBy: { type: mongoose.Types.ObjectId, ref: "Users" },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);
schema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  user.password = bcrypt.hashSync(this.password, 10);
  return next();
});

schema.pre("updateOne", function (next) {
  const password = this.getUpdate().$set.password;
  let hash;
  if (password) {
    hash = bcrypt.hashSync(password, 10);
    this.getUpdate().$set.password = hash;
  }
  next();
});

schema.methods.validatePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
};

module.exports = mongoose.model("users", schema);
