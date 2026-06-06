const mongoose = require('mongoose');
const Service = require('./models/Service');
const User = require('./models/User');
const Feedback = require('./models/Feedback');
require('dotenv').config();

const services = [
  { 
    name: {
      en: 'Instagram Followers (HQ)',
      fr: 'Abonnés Instagram (HQ)',
      ar: 'متابعين انستغرام (جودة عالية)'
    },
    platform: 'Instagram', 
    type: 'Followers', 
    price: 2.5, 
    description: {
      en: 'High quality followers with low drop rate.',
      fr: 'Abonnés de haute qualité avec un faible taux de perte.',
      ar: 'متابعين بجودة عالية مع نسبة نقص منخفضة.'
    }
  },
  { 
    name: {
      en: 'Instagram Likes (Real)',
      fr: 'Likes Instagram (Réels)',
      ar: 'إعجابات انستغرام (حقيقية)'
    },
    platform: 'Instagram', 
    type: 'Likes', 
    price: 0.8, 
    description: {
      en: 'Instant likes from real accounts.',
      fr: 'Likes instantanés de comptes réels.',
      ar: 'إعجابات فورية من حسابات حقيقية.'
    }
  },
  { 
    name: {
      en: 'Facebook Page Followers',
      fr: 'Abonnés Page Facebook',
      ar: 'متابعين صفحة فيسبوك'
    },
    platform: 'Facebook', 
    type: 'Followers', 
    price: 3.2, 
    description: {
      en: 'Global followers for your Facebook page.',
      fr: 'Abonnés mondiaux pour votre page Facebook.',
      ar: 'متابعين عالميين لصفحتك على فيسبوك.'
    }
  },
  { 
    name: {
      en: 'Facebook Post Likes',
      fr: 'Likes de Publication Facebook',
      ar: 'إعجابات منشور فيسبوك'
    },
    platform: 'Facebook', 
    type: 'Likes', 
    price: 1.2, 
    description: {
      en: 'Boost your post engagement quickly.',
      fr: 'Boostez rapidement l\'engagement de vos publications.',
      ar: 'عزز التفاعل مع منشورك بسرعة.'
    }
  },
  { 
    name: {
      en: 'TikTok Followers (Fast)',
      fr: 'Abonnés TikTok (Rapide)',
      ar: 'متابعين تيك توك (سريع)'
    },
    platform: 'TikTok', 
    type: 'Followers', 
    price: 4.5, 
    description: {
      en: 'Rapid delivery of TikTok followers.',
      fr: 'Livraison rapide d\'abonnés TikTok.',
      ar: 'تسليم سريع لمتابعي تيك توك.'
    }
  },
  { 
    name: {
      en: 'TikTok Likes (Safe)',
      fr: 'Likes TikTok (Sûr)',
      ar: 'إعجابات تيك توك (آمن)'
    },
    platform: 'TikTok', 
    type: 'Likes', 
    price: 1.5, 
    description: {
      en: 'Safe and organic-looking likes for TikTok.',
      fr: 'Likes sûrs et d\'aspect organique pour TikTok.',
      ar: 'إعجابات آمنة وتبدو طبيعية لتيك توك.'
    }
  }
];

const feedbacks = [
  {
    user: { name: 'Sami Rahmani', role: 'E-commerce Owner' },
    content: {
      en: 'Elevate Digital changed my business. My sales tripled after boosting my Instagram presence!',
      fr: 'Elevate Digital a changé mon entreprise. Mes ventes ont triplé après avoir boosté ma présence sur Instagram !',
      ar: 'لقد غيرت Elevate Digital عملي. تضاعفت مبيعاتي ثلاث مرات بعد تعزيز وجودي على انستغرام!'
    },
    rating: 5
  },
  {
    user: { name: 'Amel Cheniti', role: 'Influencer' },
    content: {
      en: 'The fastest and most reliable service in Algeria. The support team is amazing!',
      fr: 'Le service le plus rapide et le plus fiable en Algérie. L\'équipe de support est incroyable !',
      ar: 'الخدمة الأسرع والأكثر موثوقية في الجزائر. فريق الدعم مذهل!'
    },
    rating: 5
  },
  {
    user: { name: 'Yacine Belkacem', role: 'Digital Marketer' },
    content: {
      en: 'High quality followers that actually stay. Highly recommended for any serious brand.',
      fr: 'Des abonnés de haute qualité qui restent vraiment. Hautement recommandé pour toute marque sérieuse.',
      ar: 'متابعون ذوو جودة عالية يبقون فعلياً. موصى به بشدة لأي علامة تجارية جادة.'
    },
    rating: 5
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');
    
    await Service.deleteMany({});
    console.log('Cleared existing services.');
    
    await Service.insertMany(services);
    console.log('Seeded services successfully.');

    await Feedback.deleteMany({});
    await Feedback.insertMany(feedbacks);
    console.log('Seeded feedbacks successfully.');

    await User.deleteMany({});
    const dummyUser = new User({
      displayName: 'Ahmed Bensalah',
      username: 'ahmed',
      email: 'ahmed@example.com',
      password: 'password123',
      balance: 1250.00
    });
    await dummyUser.save();
    console.log('Seeded dummy user successfully.');
    
    mongoose.connection.close();
    console.log('Database connection closed.');
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedDB();
