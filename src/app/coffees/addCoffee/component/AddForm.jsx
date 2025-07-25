"use client";
import { postCoffee } from "@/app/action/postCoffee";
import { useRouter } from "next/navigation";
import React from "react";

const AddForm = () => {
  const router = useRouter()
  const handleForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.coffeeName.value;
    const price = form.price.value;
    const coffee = {
      name,
      price
    }
   
    // const res = await fetch('http://localhost:3000/api/items',{
    //   method:"POST",
    //   body: JSON.stringify(coffee),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },

    // });
    // const result = await res.json()
    const data = await postCoffee(coffee)
    router.push("/coffees")
  }
  return (
    <div>
      <form className="border p-6 rounded-md" onSubmit={handleForm}>
        <input className="border p-2  rounded-2xl mb-2" type="text" name="coffeeName" placeholder="Coffee Name" />
        <br />
        <input className="border p-2 rounded-2xl " type="number" name="price" placeholder="price" />
        <br />
        <input className="border px-4 py-1 rounded-md hover:cursor-pointer w-full mt-3" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddForm;
