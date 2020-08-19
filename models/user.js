const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
  location: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
