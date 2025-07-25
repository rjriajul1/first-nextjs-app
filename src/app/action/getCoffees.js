"use server"

import dbConnect from "@/lib/dbConnect"

export const getCoffees = async () => {
    const data = await dbConnect("plants").find({}).toArray()
    return data;
}