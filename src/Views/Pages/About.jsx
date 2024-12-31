import Banner from "../Components/Banner";
import Title from "../Components/Title";
import Blurb from "../Components/Blurb";
import Image from "../Components/Image";
import Slogan from "../Components/Slogan";

import cupCakeBanner from "../../Assets/Images/BannerImages/CupCakePastel.jpg";
import destinyPic from "../../Assets/Images/Destiny.jpg";
import windowPastery from "../../Assets/Images/WindowPastery.jpg";
import donutAqua from "../../Assets/Icons/donutAqua.png";

import data from "../../Utilities/helpers";

const About = () => {
  const { aboutBlurb1, aboutBlurb2 } = data;
  return (
    <>
      <Banner src={cupCakeBanner} alt="pastel colored cupcakes with frosting" />
      <Title text="Our Story" />
      <Slogan src={donutAqua} alt="a aqua colored donut icon" text={null} />
      <div>
        <div className="flex flex-col-reverse md:flex-row justify-around items-center py-4 mb-4">
          <div className="h-72 w-72 md:h-80 md:w-96">
            <Image
              src={destinyPic}
              alt="Destiny, founder of Destiny's Bakery"
            />
          </div>
          <div className="h-auto md:w-1/3">
            <Blurb text={aboutBlurb1} textColor="text-primaryBlue" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center py-4 border-accentAqua border-t-4">
          <div className="h-auto md:w-1/3">
            <Blurb text={aboutBlurb2} textColor="text-primaryBlue" />
          </div>
          <div className="h-72 w-72 md:h-80 md:w-96">
            <Image
              src={windowPastery}
              alt="pastries sitting in a bakery window display"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
