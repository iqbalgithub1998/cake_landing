import React from "react";

const MediaIcon = (props) => {
  return (
    <div className="bg-transparent group flex justify-center items-center rounded-full p-4 border border-darkOrange hover:cursor-pointer hover:bg-darkOrange ">
      {props.children}
    </div>
  );
};

export default MediaIcon;
