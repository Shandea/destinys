import Title from "../Components/Title";
import Blurb from "../Components/Blurb";
import Image from "../Components/Image";
import cookies from "../../Assets/Images/CookieWhiteChocolateSideWays.png";
import cupCakePink from "../../Assets/Images/CupcakePink.png";
const homeBlurbText =
  "At Destiny's Bakery, our mission is to spread joy and create moments of happiness through our love for baking. We are committed to making every treat a delightful experience while giving back to the community by donating to our neighborhood and helping raise funds for those in need.";
const Home = () => {
  return (
    <>
      <img
        src={cookies}
        alt="white choclate strawberry cookies"
        className="h-full w-full object-contain"
      />
      <Title text="Our Mission" />
      <div className="my-4 flex flex-col md:flex-row content-center items-center p-5 border-accentAqua border-y-2">
        <Blurb text={homeBlurbText} />
        <Image src={cupCakePink} alt="pink and brown cupcake" />
      </div>
    </>
  );
};
export default Home;
