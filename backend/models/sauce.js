const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  name: { type: String, required: true },
  manifacturer: { type: String, required: true },
  description: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  mainPepper: { type: String, required: true },
  usersLinked: { type: String, required: true },
  usersDisliked: { type: String, required: true },
  userId: { type: String, required: true }
});

module.exports = mongoose.model('Sauce', sauceSchema);