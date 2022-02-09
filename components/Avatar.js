/* eslint-disable @next/next/no-img-element */
import React from "react";

const Avatar = ({ url }) => {
  return (
    <img
      loading="lazy"
      className="h-9 rounded-full cursor-pointer 
      hover:border-4"
      src={url}
      alt="Profile picture"
    />
  );
};

export default Avatar;
