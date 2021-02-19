const mongoose = require("mongoose");
const config = require("./default.json");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user:user@cluster0.q0zec.mongodb.net/test?retryWrites=true&w=majority",
      {
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("nimish");
    console.log("error");
    process.exit(1);
  }
};

module.exports = connectToDatabase;
