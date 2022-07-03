import React from "react";
import { IoMailOpenOutline, IoPersonOutline } from "react-icons/io5";
import FormField from "./FormField";

const Form = () => {
  return (
    <div className="border w-full md:w-[80%] bg-darkOrange border-darkOrange rounded-lg p-3 md:p-7 space-y-2">
      <div className="w-full flex justify-center">
        <span className="text-3xl">Contact Form</span>
      </div>
      <FormField label="Your Name" placeholder="Name">
        <IoPersonOutline className="w-6 h-6 text-darkGrayishBlue group-hover:text-darkOrange group-active:text-darkOrange" />
      </FormField>
      <FormField label="Your Email" placeholder="email">
        <IoMailOpenOutline className="w-6 h-6 text-darkGrayishBlue group-hover:text-darkOrange group-active:text-darkOrange" />
      </FormField>
      <div className="flex flex-col">
        <label>Message</label>
        <textarea
          className=" p-2 rounded-md h-40 focus:outline-none"
          placeholder="Enter your Message...."
        />
      </div>
      <div className="w-full flex justify-end">
        <button className="border rounded-md bg-lightGreen px-14 py-3 font-semibold shadow-md hover:shadow-lg active:shadow-xl">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
