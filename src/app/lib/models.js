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
}, { timestamps: true})

const postSchema = new mongoose.Schema({
  title: {
    type:String,
    required:true,
  },
  desc: {
    type:String,
    required:true,
  },
  img: {
    type:String,
  },
  userId:{
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required:true,
    unique:true,
  }
}, { timestamps:true })

export const Client = mongoose.models.Client || mongoose.model("clients", clientSchema)
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema)