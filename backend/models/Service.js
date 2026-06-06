const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    en: { type: String, required: true },
    fr: { type: String, required: true },
    ar: { type: String, required: true }
  },
  platform: { type: String, required: true, enum: ['Instagram', 'Facebook', 'TikTok'] },
  type: { type: String, required: true, enum: ['Followers', 'Likes', 'Views', 'Other'] },
  price: { type: Number, required: true }, // Price per 1000 units
  minQuantity: { type: Number, default: 100 },
  maxQuantity: { type: Number, default: 100000 },
  description: {
    en: { type: String },
    fr: { type: String },
    ar: { type: String }
  },
  active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
