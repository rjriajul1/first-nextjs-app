"use server"

import dbConnect from "@/lib/dbConnect"

export const postCoffee = async(postData) => {

  const result= await dbConnect("plants").insertOne(postData)
 
  return result
}
