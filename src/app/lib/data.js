import { connectToDb } from "./utils";
import { Client } from "./models";
import { unstable_noStore as noStore } from "next/cache";

export const getClient = async () => {
  noStore()
  try {
    connectToDb()
    const client = await Client.find()
    return client;

  } catch (error) {
    console.log(error);
    throw new Error("FAIL from getClient")
  }
}

export const getOneClient = async (id) => {
  noStore()
  try {
    connectToDb()
    const oneClient = await Client.findById(id)
    return oneClient;

  } catch (error) {
    console.log(error);
    throw new Error("FAIL from getOneClient")
  }
}

