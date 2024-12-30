import { useNavigate } from "react-router";
import Banner from "../Components/Banner";
import doughnutsBlue from "../../Assets/Images/BannerImages/DoughnutBlue.jpg";
import Slogan from "../Components/Slogan";
import Blurb from "../Components/Blurb";
import Carousel from "../Components/Carousel";
import Image from "../Components/Image";
import CharityHelping from "../../Assets/Images/CharityHelping.png";
import Button from "../Components/Button";
import ThreeImages from "../Components/ThreeImages";

import data from "../../Utilities/helpers";

const Community = () => {
  const navigate = useNavigate();
  const { communityBlurbTxt } = data;
  return (
    <>
      <Banner src={doughnutsBlue} alt="multiple donuts on a blue background" />
      <div className="space-y-8 p-5">
        <Slogan />
        <div>
          <ThreeImages />
        </div>
        <Carousel />
        <div className="flex flex-col md:flex-row items-center gap-4 px-5">
          <Image
            src={CharityHelping}
            alt="Picture of a women helping at a fundraiser"
          />
          <Blurb
            className="p-5 text-center"
            text={communityBlurbTxt}
            textColor="text-primaryBlue"
          />
        </div>
        <div className="flex justify-center">
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
