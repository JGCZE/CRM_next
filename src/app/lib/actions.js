
import { connectToDb } from "./utils";
import { Client } from "./models";
import { revalidatePath } from "next/cache";

export const addClient = async (client) => {

  try {
    await connectToDb()
    console.log(client)
    // const newClient = new Client(client)
    // await newClient.save()
    console.log("Client added");
    revalidatePath("/kmen")
  } catch (error) {
    console.log(error);
    console.log("failed to add client !!!!");
    throw new Error("FAIL")
  }
}
