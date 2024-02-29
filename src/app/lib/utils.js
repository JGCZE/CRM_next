const { default: mongoose } = require("mongoose")

// for stoping recurent connection
const connection = {}

export const connectToDb = async () => {
  try {
    if (connection.isConnected){
      console.log("using existing connection");
      return  
    }
    await mongoose.connect(process.env.MONGO)
      .then(() => console.log("connected to db"))
      .catch((err) => console.log(err));
    //connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error("This is a fucking error bro...!?");
  }
}