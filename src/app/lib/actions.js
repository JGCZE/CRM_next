"use server"

import { connectToDb } from "./utils";
import { Client } from "./models";
import { revalidatePath } from "next/cache";

export const addClient = async (client) => {
  const { name, rank, servis, zp, majetek, hypo, invj, invm, address } = Object.fromEntries(client);

  try {
    await connectToDb()
    const newClient = new Client({ name, rank, servis, zp, majetek, hypo, invj, invm, address })
    await newClient.save()
    console.log("Client added");
    revalidatePath("/kmen")
  } catch (error) {
    console.log(error);
    console.log("failed to add client !!!!");
    throw new Error("FAIL")
  }
}
