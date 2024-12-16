import React from "react";
const Image = ({ src, alt }) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className=" border-accentAqua border-4  rounded-3xl h-full w-full object-cover"
      />
    </>
  );
};

export default Image;