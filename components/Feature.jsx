import React from "react";
import Products from "./Products";
import Image from "next/image";
import favCake from "../assets/favCake.png";

const Feature = () => {
  const products = [
    {
      id: "1",
      url: "/products/p1.png",
      name: "Birthday Cake",
      price: 15.0,
    },
    {
      id: "2",
      url: "/products/p2.png",
      name: "Muffin",
      price: 15.0,
    },
    {
      id: "3",
      url: "/products/p3.png",
      name: "Biscuit",
      price: 15.0,
    },
    {
      id: "4",
      url: "/products/p4.png",
      name: "Vanilla Cake",
      price: 15.0,
    },
    {
      id: "5",
      url: "/products/p5.png",
      name: "Piece Cake",
      price: 15.0,
    },
    {
      id: "6",
      url: "/products/p6.png",
      name: "White Forest",
      price: 15.0,
    },
    {
      id: "7",
      url: "/products/p7.png",
      name: "Chocolate Cake",
      price: 15.0,
    },
    {
      id: "8",
      url: "/products/p8.png",
      name: "Bread",
      price: 15.0,
    },
  ];
  return (
    <div className="pb-2">
      <div className="container mx-auto pt-10 md:py-12 md::px-20 space-y-3 ">
        <div className="space-y-4 lg:px-10 text-center md:text-left">
          <h2 className="text-5xl">Our featured Food</h2>
          <span className="text-darkGrayishBlue block md:max-w-xl">
            Cake is a flour confection made from flour, sugar, and other
            ingredients, and is usually baked. In their oldest forms, cakes were
            modifications of bread, but cakes now cover a wide range of
            preparations
          </span>
        </div>
        <div className="flex no-scrollbar overflow-x-auto scroll-smooth sm:overflow-hidden sm:grid sm:grid-cols-2  md:grid-cols-4 gap-4 p-2  lg:px-10">
          {products.map((product, index) => (
            <Products
              key={index}
              imgURL={product.url}
              price={product.price}
              name={product.name}
            />
          ))}
        </div>
        <div className="w-full flex justify-end pr-2 md:pr-10">
          <button className="border rounded-full border-darkOrange w-32 h-10 text-darkOrange hover:bg-darkOrange hover:text-white shadow-sm hover:shadow-lg">
            More Products
          </button>
        </div>
      </div>
      {/* Best selling food  */}
      <div className="md:flex mt-5 justify-end">
        <div className="md:w-1/2 flex md:justify-end items-center">
          <div className="space-y-2 px-2">
            <div className="space-x-2 md:space-x-0">
              <span className=" text-4xl font-semibold">Best Sell</span>
              <span className="md:block text-4xl font-semibold">
                Food In This Week!
              </span>
            </div>
            <div className="text-darkOrange space-x-4 font-semibold">
              <span>₹ 15.00</span>
              <span>★★★★★</span>
            </div>
            <div className="max-w-md text-darkGrayishBlue">
              <span>
                Strawberry cake is a cake that uses strawberry as a primary
                ingredient. Strawberries may be used in the cake batter, atop
                the cake, and in the frosting. Strawberry cakes are typically
                served cold.
              </span>
            </div>
            <div>
              <button className="border rounded-full border-darkOrange w-32 h-10 text-darkOrange hover:bg-darkOrange hover:text-white shadow-sm hover:shadow-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <div className="w-[60%] md:w-full md:flex md:justify-end">
            <Image src={favCake} alt="favCake" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
