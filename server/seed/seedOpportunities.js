const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Opportunity = require("../models/Opportunity");
const Seller = require("../models/Seller");
const BusinessHealth = require("../models/BusinessHealth");
const Analytics = require("../models/Analytics");

dotenv.config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ Connected to MongoDB");

    // Clear old data
    await Opportunity.deleteMany({});
    await Seller.deleteMany({});
    await BusinessHealth.deleteMany({});
    await Analytics.deleteMany({});

    // Create a demo seller
    const seller = await Seller.create({
      name: "Muskan Kohli",
      storeName: "Fashion Studio",
      avatar: "",
      rating: 4.8,
      followers: 2150,
      languages: ["English", "Hindi"],
    });

    await BusinessHealth.create({
      sellerId: seller._id,
      orders: 248,
      revenue: 486500,
      returns: 9,
      pendingPayments: 32500,
    });

    await Analytics.create({
      sellerId: seller._id,

      totalRevenue: 486500,
      totalOrders: 248,
      totalLiveSessions: 18,
      totalViewers: 32750,
      conversionRate: 8.4,

      topProducts: [
        {
          name: "Women's Cotton Kurti",
          revenue: 182000,
        },
        {
          name: "Printed Cotton Top",
          revenue: 126500,
        },
        {
          name: "Summer Palazzo",
          revenue: 98000,
        },
      ],

      liveHistory: [
        {
          title: "Summer Collection Launch",
          revenue: 86000,
          viewers: 5400,
          date: "2026-07-10",
        },
        {
          title: "Weekend Flash Sale",
          revenue: 112000,
          viewers: 7200,
          date: "2026-07-12",
        },
        {
          title: "Ethnic Wear Special",
          revenue: 94500,
          viewers: 6100,
          date: "2026-07-14",
        },
      ],
    });

    // Create opportunities
    await Opportunity.insertMany([
      {
        sellerId: seller._id,
        title: "Go Live with Summer Kurtis",
        category: "Women's Fashion",
        confidence: 94,
        priority: "HIGH",
        expectedDemand: "Very High",
        expectedRevenue: 45000,
        reasoning:
          "Summer ethnic wear is currently trending and inventory is available.",
        recommendedProducts: [],
      },
      {
        sellerId: seller._id,
        title: "Promote Cotton Tops",
        category: "Women's Fashion",
        confidence: 87,
        priority: "MEDIUM",
        expectedDemand: "High",
        expectedRevenue: 25000,
        reasoning:
          "Cotton tops have shown increased engagement during afternoon sessions.",
        recommendedProducts: [],
      },
      {
        sellerId: seller._id,
        title: "Weekend Flash Sale",
        category: "Fashion",
        confidence: 91,
        priority: "HIGH",
        expectedDemand: "Very High",
        expectedRevenue: 60000,
        reasoning:
          "Weekend live sessions historically generate higher conversions.",
        recommendedProducts: [],
      },
    ]);

    console.log("✅ Sample data inserted");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedDatabase();