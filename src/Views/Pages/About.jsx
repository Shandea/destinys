import Banner from "../Components/Banner";
import Title from "../Components/Title";
import cupCakeBanner from "../../Assets/Images/BannerImages/CupCakePastel.jpg";
import destinyPic from "../../Assets/Images/Destiny.jpg";

import data from "../../Utilities/helpers";

const About = () => {
  const { aboutData } = data;
  const aboutBlurbs = aboutData.filter(Boolean);
  return (
    <>
      <Banner src={cupCakeBanner} alt="pastel colored cupcakes with frosting" />

      <Title text="Our Story" />
      <div className="bg-primaryBlue border-accentAqua border-x-4 p-4 flex flex-col lg:flex-row">
        <img
          src={destinyPic}
          alt="Destiny, founder of Destiny's Bakery"
          className="h-auto w-auto lg:h-100 lg:w-1/2 object-cover shadow-md"
        />
        <div className="py-4 lg:py-0 lg:px-4">
          {aboutBlurbs.map((el, ind) => (
            <p className="p text-center text-white" key={el.id}>
              {el.text}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
export default About;
