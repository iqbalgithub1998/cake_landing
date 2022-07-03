import React from "react";
import { IoCall, IoLocationSharp, IoMail } from "react-icons/io5";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import MediaIcon from "./MediaIcon";
import Form from "./Form";
const Contact = () => {
  return (
    <div className="pt-5 space-y-3 container mx-auto  md:flex  items-center">
      <div className=" md:w-1/2 flex justify-center md:justify-end items-center">
        <Form />
      </div>
      <div className="space-y-7 flex flex-col justify-center  md:items-start  md:w-1/2 px-10">
        <div className="max-w-xs">
          <h2 className="text-3xl font-semibold">Bring on the cake!</h2>
          <span className="text-darkGrayishBlue">
            Fill up thr form and our team will get back to you within 24 hours.
          </span>
        </div>
        <div className="space-y-4">
          <div className="flex space-x-2 items-center">
            <IoCall className="w-7 h-7 text-darkOrange" />
            <span className="font-semibold"> +0123456789 </span>
          </div>
          <div className="flex space-x-2 items-center">
            <IoMail className="w-7 h-7 text-darkOrange" />
            <span className="font-semibold">contact@cake.com</span>
          </div>
          <div className="flex space-x-2 items-center">
            <IoLocationSharp className="w-7 h-7 text-darkOrange" />
            <span className="font-semibold">102 Street Serampore, India</span>
          </div>
        </div>
        <div className="flex px-5 pb-5 space-x-3">
          <MediaIcon>
            <FiFacebook className="w-7 h-7 text-darkOrange group-hover:text-white " />
          </MediaIcon>

          <MediaIcon>
            <FiInstagram className="w-7 h-7 text-darkOrange group-hover:text-white" />
          </MediaIcon>
        </div>
      </div>
    </div>
  );
};

export default Contact;
