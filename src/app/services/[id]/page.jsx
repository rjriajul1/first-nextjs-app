import React from "react";

const ServicesDetailsPage = ({ params }) => {
  const services = [
    {
      id: 1,
      name: "water",
      price: 20,
    },
    {
      id: 2,
      name: "tea",
      price: 5,
    },
    {
      id: 3,
      name: "biskut",
      price: 20,
    },
  ];
  const id = parseInt(params.id);
  const singleService = services.find((ser) => ser.id === id);

  if (singleService) {
    return (
      <div>
        service details: {id}
        <p>price ${singleService.price}</p>
      </div>
    );
  }else{
   return <div>
      <p className="text-white ">NOT FOUND NOW ANY DATA !!</p>
    </div>
  }
};

export default ServicesDetailsPage;
