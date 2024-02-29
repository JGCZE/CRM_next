import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: {
    type:String,
    required:false,
    unique: false,
  },
  rank: {
    type:String,
    required:true,
    unique: false,
    min:3,
    max:30,
  },
  servis: {
    type:String,
    required:false,
    unique: false,
  },
  zp: {
    type:String,
    required: false,
  },
  majetek: {
    type:String,
    required: false,
  },
  hypo: {
    type:String,
    required: false,
  },
  invj: {
    type:String,
    required: false,
  },
  invm: {
    type:String,
    required: false,
  },
  address: {
    type:String,
    required: false,
  },
}, { timestamps: true})


export const Client = mongoose.models.Client || mongoose.model("Client", clientSchema)
