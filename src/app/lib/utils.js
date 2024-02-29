const { default: mongoose } = require("mongoose")

// for stoping recurent connection
const connection = {}

export const connectToDb = async () => {
  try {
    if (connection.isConnected){
      console.log("using existing connection");
      return  
    }
    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 25000
    
    });
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error("This is a fucking error bro...!?");
  }
}