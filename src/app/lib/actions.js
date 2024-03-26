"use server"
import { connectToDb } from "./utils";
import { Client } from "./models";
import { revalidatePath } from "next/cache";
import { unstable_noStore as noStore } from "next/cache";
import { signIn, signOut } from "../lib/auth";


export const addClient = async (client) => {
  const { name, rank, servis, zp, majetek, hypo, invj, invm, address } = Object.fromEntries(client);
  noStore()
  try {
    await connectToDb()
    const newClient = new Client({ name, rank, servis, zp, majetek, hypo, invj, invm, address })
    await newClient.save()
    console.log("Client added ");
    revalidatePath("/kmen")
  } catch (error) {
    console.log(error);
    console.log("failed to add client !!!!");
    throw new Error("FAIL")
  }
}

export const deleteClient = async (formData) => {
  noStore()
  const id = Object.fromEntries(formData)

  try {
    await connectToDb()
    await Client.findByIdAndDelete(id)
    console.log("Client deleted ");
    revalidatePath("/kmen")
  } catch (error) {
    console.log(error);
    console.log("failed to delete client !!!!");
    throw new Error("FAIL")
  }
}

export const handleLogOut = async () => {
  await signOut()
  return true
}

export const login = async (formData) => {
  const { username, password } = 
    Object.fromEntries(formData)

  try {
    await signIn("credentials", { username, password })
  } catch (err){
    console.log(err);
    return { error: "something went wrong!"}
  }
}
