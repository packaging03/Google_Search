/* eslint-disable @next/next/no-img-element */
import React from "react";

const Avatar = ({ url }) => {
  return <img loading="lazy" src={url} alt="Profile picture" />;
};

export default Avatar;
