
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
  email: String,
  settings: {
    preferredResort: String,
    notifications: { type: Boolean, default: true }
  }
});

module.exports = mongoose.model('User', userSchema);
