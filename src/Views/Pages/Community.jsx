import { useNavigate } from "react-router";
import Banner from "../Components/Banner";
import Slogan from "../Components/Slogan";
import Blurb from "../Components/Blurb";
import Carousel from "../Components/Carousel";
import Image from "../Components/Image";
import Button from "../Components/Button";
import ThreeImages from "../Components/ThreeImages";

import doughnutsBlue from "../../Assets/Images/BannerImages/DoughnutBlue.jpg";
import charityHelping from "../../Assets/Images/CharityHelping.png";
import cupCakeIcon from "../../Assets/Icons/CupcakeIcon.png";

import data from "../../Utilities/helpers";

const Community = () => {
  const navigate = useNavigate();
  const { communityBlurbTxt } = data;
  return (
    <>
      <Banner src={doughnutsBlue} alt="multiple donuts on a blue background" />
      <div className="space-y-4 w-full">
        <Slogan
          text="Spreading Joy, One Sweet Bite at a Time!"
          src={cupCakeIcon}
          alt="tiny colorful cupcake with frosting"
        />
        <div>
          <ThreeImages />
        </div>
        <Carousel />
        <div className="flex flex-col md:flex-row items-center justify-around w-full">
          <div className="md:w-1/3 flex items-center justify-center">
            <div className="size-80 md:size-96">
              <Image
                src={charityHelping}
                alt="Picture of a women helping at a fundraiser"
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <Blurb
              className="p-5 text-center"
              text={communityBlurbTxt}
              textColor="text-primaryBlue"
            />
          </div>
        </div>
        <div className="flex justify-center pb-4">
          <a href={window.innerWidth <= 768 ? "tel:15206869449" : undefined}>
            <Button
              backgroundColor="bg-secondaryRed"
              textColor="text-white"
              text="Donate today!"
              onClick={
                window.innerWidth > 768 ? () => navigate("/contact") : null
              }
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Community;
