import Banner from "../Components/Banner";
import Title from "../Components/Title";
import cupCakeBanner from "../../Assets/Images/BannerImages/CupCakePastel.jpg";
import destinyPic from "../../Assets/Images/Destiny.jpg";
import WindowPastery from "../../Assets/Images/WindowPastery.jpg"
import Image from "../Components/Image"
import donutAqua from "../../Assets/Icons/donutAqua.png"

import data from "../../Utilities/helpers";

const About = () => {
  const { aboutData } = data;
  const aboutBlurbs = aboutData.filter(Boolean);
  const bakeryBlurbs = aboutData.filter(Boolean);
  return (
    <>
      <Banner src={cupCakeBanner} alt="pastel colored cupcakes with frosting" />

      <Title text="Our Story" /> 
      <div className='w-20 flex justify-self-center '>
        <Image src={donutAqua} />
      </div>
      <div className="border-y-4">
      <div className="border-accentAqua border-x-4 p-4 flex flex-col lg:flex-row">
        <img
          src={destinyPic}
          alt="Destiny, founder of Destiny's Bakery"
          className="h-auto w-auto lg:h-100 lg:w-1/2 object-cover shadow-md"
        />
        <div className="py-4 lg:py-0 lg:px-4">
          {aboutBlurbs.map((el, ind) => (
            <p className="p text-center text-primaryBlue" key={el.id}>
              {el.text}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-row border-y-4 ">
        <div className="py-4 lg:py-0 lg:px-4">
          {bakeryBlurbs.map((el, ind) => (
            <p className="p text-center text-primaryBlue" key={el.id}>
              {el.text}
            </p>
          ))}
        </div>
        <div>
          <Image src={WindowPastery}/>
        </div>
      </div>
      </div>
    </>
  );
};
export default About;
