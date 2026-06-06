const mongoose = require('mongoose');
const Service = require('./models/Service');
require('dotenv').config();

const services = [
  { name: 'Instagram Followers (HQ)', platform: 'Instagram', type: 'Followers', price: 2.5, description: 'High quality followers with low drop rate.' },
  { name: 'Instagram Likes (Real)', platform: 'Instagram', type: 'Likes', price: 0.8, description: 'Instant likes from real accounts.' },
  { name: 'Facebook Page Followers', platform: 'Facebook', type: 'Followers', price: 3.2, description: 'Global followers for your Facebook page.' },
  { name: 'Facebook Post Likes', platform: 'Facebook', type: 'Likes', price: 1.2, description: 'Boost your post engagement quickly.' },
  { name: 'TikTok Followers (Fast)', platform: 'TikTok', type: 'Followers', price: 4.5, description: 'Rapid delivery of TikTok followers.' },
  { name: 'TikTok Likes (Safe)', platform: 'TikTok', type: 'Likes', price: 1.5, description: 'Safe and organic-looking likes for TikTok.' }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/elevate-digital');
    console.log('Connected to MongoDB for seeding...');
    
    await Service.deleteMany({});
    console.log('Cleared existing services.');
    
    await Service.insertMany(services);
    console.log('Seeded services successfully.');
    
    mongoose.connection.close();
    console.log('Database connection closed.');
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedDB();
