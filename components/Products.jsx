import React from "react";
import Image from "next/image";

const Products = ({ imgURL, price, name }) => {
  return (
    <div className="border h-50 w-40 min-w-[150px] sm:h-full sm:w-full rounded-xl overflow-hidden  border-darkGrayishBlue hover:text-darkOrange hover:shadow-lg   ">
      <div className="md:h-48 overflow-hidden ">
        <Image
          className="md:object-none products"
          src={imgURL}
          alt="products"
          width={"100%"}
          height="100%"
          layout="responsive"
        />
      </div>
      <div className="text-center p-2">
        <span className="block font-semibold ">₹ {price}.oo</span>
        <span className="block font-semibold">{name}</span>
      </div>
    </div>
  );
};

export default Products;
