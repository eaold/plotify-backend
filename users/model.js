const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    display_name: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    images: [],
    href: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('user', userSchema);

module.exports = User;