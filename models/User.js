const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  tokens: [{ token: { type: String, required: true } }],
});

/**
 * Hide properties of Mongoose User object.
 */
userSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();
  delete userObject.__v;
  delete userObject.tokens;
  delete userObject._id;

  return userObject;
};

/**
 * Helper method for generating Auth Token
 */
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: '90m',
  });
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

/**
 * Helper static method for finding user by credentials
 */
userSchema.statics.findByCredentials = async function(email) {
  const User = this;
  const user = await User.findOne({ email });
  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
