import { connectToDb } from "./utils";
import { Client } from "./models";
import { Post } from "./models"

export const getClient = async () => {
  try {
    connectToDb()
    const client = await Client.find()
    console.log(client + "from data.js");
    return client;

  } catch (error) {
    console.log(error);
    console.log("failed to fetch !!!!");
    throw new Error("FAIL")
  }
}

export const getOneClient = async (id) => {
  try {
    connectToDb()
    const oneClient = await Client.findById(id)
    console.log(oneClient + " ONE CLIENT");
    return oneClient;

  } catch (error) {
    console.log(error);
    console.log("failed to fetch !!!!");
    throw new Error("FAIL")
  }
}