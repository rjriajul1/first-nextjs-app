import dbConnect from "@/lib/dbConnect";
import React from "react";
import { getCoffees } from "../action/getCoffees";

const CoffeesPage = async () => {
  // console.log(process.env.BASE_URL);
  // const res = await fetch(`${process.env.BASE_URL}/api/items`)
  // const data = await res.json()
  // const cof =  data.data
  const cof = await getCoffees();

  return (
    <div>
      {cof.map((coffee) => (
        <div key={coffee._id}>
          {/* <Image width={300} height={300} src={coffee?.photo}/> */}
          <p>{coffee.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CoffeesPage;
