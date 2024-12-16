import React from "react";
import Button from "../Components/Button.jsx";
import Header from "../Components/Header.jsx";
import Blurb from "../Components/Blurb.jsx";
import Image from "../Components/Image.jsx";
import data from '../../Utilities/helpers.js'; 


const Cake = () => {
  const desiredOrder = [3, 1, 5, 7, 6,8, 9,10 ];
  const imagesToDisplay = desiredOrder
  .map((id) => data.flipCardData.find((item) => item.id === id)) 
  .filter((image) => image); 
  return (
    <>
      <Header />
      <Blurb 
        text="From elegant wedding cakes to fun birthday designs, our cakes are made to celebrate life's sweetest moments. Each one is handcrafted with love and customized to your vision, ensuring your special day is as unique as you are"
      />
      <Button className="color-#d63d52" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {imagesToDisplay.map((image) => (
          <div key={image.id} className="image-item">
            <Image
              src={image.src}
              alt={image.alt}
              className="border-accentAqua border-4 rounded-3xl h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cake;
