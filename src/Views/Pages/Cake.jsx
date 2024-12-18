import React from "react";
import Banner from "../Components/Banner";
import ButtonCard from "../Components/Cards/ButtonCard";
import Title from "../Components/Title";
import Image from "../Components/Image";
import CardTitle from "../Components/Cards/CardTitle";
import data from "../../Utilities/helpers";

import cakeStar from "../../Assets/Images/BannerImages/CakeStar.jpg";

const Cake = () => {
  const { cakeBlurb, cakeData } = data;
  const imagesToDisplay = cakeData.filter(Boolean);

  return (
    <>
      <Banner src={cakeStar} alt="a frosted cake with stars on it" />
      <div className="my-4">
        <ButtonCard
          blurbText={cakeBlurb}
          blurbTextColor="text-primaryBlue"
          buttonText="Call To Order!"
          buttonBgColor="bg-primaryBlue"
          buttonTextColor="text-white"
        />
        <div className="my-4">
          <Title text="Our Cakes" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {imagesToDisplay.map((image) => (
            <div
              key={image.id}
              className="w-full flex flex-col justify-center items-center"
            >
              <div className="h-80 w-80">
                <Image src={image.src} alt={image.alt} />
              </div>
              <div className="my-2">
                <CardTitle cardTitle={image.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cake;
