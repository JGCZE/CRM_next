const { default: mongoose } = require("mongoose")

// for stoping recurent connection
const connection = {}

export const connectToDb = async () => {
  if (connection.isConnected) {
    console.log("Using existing connection");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to DB");
    connection.isConnected = true; // Změněno na true, protože nemáme přístup k db.connections[0].readyState
  } catch (error) {
    console.error("Failed to connect to DB:", error);
    throw new Error("Failed to connect to DB");
  }
};