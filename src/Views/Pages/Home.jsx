import Banner from "../Components/Banner";
import Title from "../Components/Title";
import Blurb from "../Components/Blurb";
import Image from "../Components/Image";

import pasteryDisplay from "../../Assets/Images/BannerImages/PasteryDisplay.jpg";
import bakeryDisplay from "../../Assets/Images/BannerImages/bakeryDisplay.jpg";
import cupCakePink from "../../Assets/Images/CupcakePink.png";
import cupCakeSprinkles from "../../Assets/Images/CupcakeSprinkles.png";

import data from "../../Utilities/helpers";
const missionBlurbText = data.missionBlurbText;
const visionBlurbText = data.visionBlurbText;

const Home = () => {
  return (
    <>
      <Banner src={pasteryDisplay} alt="white choclate strawberry cookies" />
      <div>
        <Title text="Our Mission" />
        <div className="flex flex-col md:flex-row justify-around items-center my-4 py-4 border-accentAqua border-y-2">
          <div className="h-auto md:w-1/3">
            <Blurb text={missionBlurbText} textColor="text-primaryBlue" />
          </div>
          <div className="h-72 w-72 md:h-80 md:w-96">
            <Image src={cupCakePink} alt="pink and brown cupcake" />
          </div>
        </div>
      </div>
      <Banner src={bakeryDisplay} alt="white choclate strawberry cookies" />
      <div>
        <Title text="Our Vision" />
        <div className="flex flex-col-reverse md:flex-row justify-around items-center my-4 py-4 border-accentAqua border-y-2">
          <div className="h-72 w-72 md:h-80 md:w-96">
            <Image
              src={cupCakeSprinkles}
              alt="white and brown cupcake with sprinkles"
            />
          </div>
          <div className="h-auto md:w-1/3">
            <Blurb text={visionBlurbText} textColor="text-primaryBlue" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
