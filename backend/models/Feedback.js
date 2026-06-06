const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  user: {
    name: { type: String, required: true },
    avatar: { type: String },
    role: { type: String } // e.g., "Entrepreneur", "Influencer"
  },
  content: {
    en: { type: String, required: true },
    fr: { type: String, required: true },
    ar: { type: String, required: true }
  },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);
