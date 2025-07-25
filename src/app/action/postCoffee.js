"use server"

import dbConnect from "@/lib/dbConnect"

export const postCoffee = async(postData) => {

  const result= await dbConnect("coffees").insertOne(postData)
 
  return result
}
