const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Opportunity = require("../models/Opportunity");
const Seller = require("../models/Seller");
const BusinessHealth = require("../models/BusinessHealth");
const Analytics = require("../models/Analytics");

const Product = require("../models/Product");
const LiveSession = require("../models/LiveSession");

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
    await Product.deleteMany({});
    await LiveSession.deleteMany({});

    // Create Seller
    const seller = await Seller.create({
      name: "Muskan Kohli",
      storeName: "Fashion Studio",
      avatar: "",
      rating: 4.8,
      followers: 2150,
      languages: ["English", "Hindi"],
    });

    // Create Products
    const products = await Product.insertMany([
      {
        sellerId: seller._id,
        name: "Women's Cotton Kurti",
        brand: "Fashion Studio",
        price: 1499,
        images: [
          "https://images.unsplash.com/photo-1583391733956-6c78276477e2",
        ],
        sizes: ["S", "M", "L", "XL"],
        stock: 42,
        category: "Women's Fashion",
      },
      {
        sellerId: seller._id,
        name: "Printed Cotton Top",
        brand: "Fashion Studio",
        price: 899,
        images: [
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
        ],
        sizes: ["S", "M", "L"],
        stock: 58,
        category: "Women's Fashion",
      },
      {
        sellerId: seller._id,
        name: "Summer Palazzo",
        brand: "Fashion Studio",
        price: 1199,
        images: [
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
        ],
        sizes: ["M", "L", "XL"],
        stock: 35,
        category: "Women's Fashion",
      },
      {
        sellerId: seller._id,
        name: "Floral Anarkali Kurta",
        brand: "Fashion Studio",
        price: 1899,
        images: [
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        ],
        sizes: ["S", "M", "L", "XL"],
        stock: 18,
        category: "Ethnic Wear",
      },
      {
        sellerId: seller._id,
        name: "Linen Straight Pants",
        brand: "Fashion Studio",
        price: 1299,
        images: [
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
        ],
        sizes: ["M", "L", "XL"],
        stock: 27,
        category: "Bottom Wear",
      },
    ]);

    // Create Business Health
    await BusinessHealth.create({
      sellerId: seller._id,
      orders: 248,
      revenue: 486500,
      returns: 9,
      pendingPayments: 32500,
    });

    // Create Analytics
    await Analytics.create({
      sellerId: seller._id,

      totalRevenue: 486500,
      totalOrders: 248,
      totalLiveSessions: 18,
      totalViewers: 32750,
      conversionRate: 8.4,

      topProducts: [
        {
          name: products[0].name,
          revenue: 182000,
        },
        {
          name: products[1].name,
          revenue: 126500,
        },
        {
          name: products[2].name,
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

    // Create Live Session
    await LiveSession.create({
      sellerId: seller._id,
      title: "Weekend Ethnic Wear Live Sale",
      status: "scheduled",
      pinnedProductId: products[0]._id,
      viewerCount: 0,
      startedAt: null,
      endedAt: null,
    });

    // Create Opportunities
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
        recommendedProducts: [
          products[0]._id,
          products[3]._id,
        ],
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
        recommendedProducts: [
          products[1]._id,
        ],
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
        recommendedProducts: [
          products[0]._id,
          products[2]._id,
        ],
      },
    ]);

    console.log("✅ Sample data inserted successfully");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedDatabase();