import Title from "../Components/Title";
import Blurb from "../Components/Blurb";
import Image from "../Components/Image";
import cookies from "../../Assets/Images/CookieWhiteChocolateSideWays.png";
import cupCakePink from "../../Assets/Images/CupcakePink.png";
import cupCakeSprinkles from "../../Assets/Images/CupcakeSprinkles.png";
const missionBlurbText =
  "At Destiny's Bakery, our mission is to spread joy and create moments of happiness through our love for baking. We are committed to making every treat a delightful experience while giving back to the community by donating to our neighborhood and helping raise funds for those in need.";
const visionBlurbText =
  "Our vision is to be a bakery that not only fills hearts with happiness and homes with sweetness but also fosters kindness and community by using our passion for baking to make a meaningful difference.";
const Home = () => {
  return (
    <>
      <img
        src={cookies}
        alt="white choclate strawberry cookies"
        className="h-full w-full object-contain"
      />

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

      <div>
        <Title text="Our Vision" />
        <div className="flex flex-col-reverse md:flex-row justify-around items-center my-4 py-4 border-accentAqua border-y-2">
          <div className="h-72 w-72 md:h-80 md:w-96">
            <Image
              src={cupCakeSprinkles}
              alt="pink and brown cupcake with sprinkles"
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
