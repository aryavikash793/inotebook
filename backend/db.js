const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook"; // Use the correct database name

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectToMongo;
