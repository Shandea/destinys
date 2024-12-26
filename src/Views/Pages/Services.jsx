import { useNavigate } from "react-router";
import Banner from "../Components/Banner";
import ButtonCard from "../Components/Cards/ButtonCard";
import FlipCard from "../Components/Cards/FlipCard";

import donutsPink from "../../Assets/Images/BannerImages/DoughnutPink.jpg";

import data from "../../Utilities/helpers";

const Services = () => {
  const navigate = useNavigate();
  const { servicesBlurb, flipCardData } = data;
  const dataToDisplay = flipCardData.filter(Boolean);
  return (
    <>
      <Banner src={donutsPink} alt="multiple donuts on a pink background" />
      <div className="my-4">
        <ButtonCard
          blurbText={servicesBlurb}
          blurbTextColor="text-primaryBlue"
          buttonText="Give Us A Call!"
          buttonOnClick={
            window.innerWidth > 768 ? () => navigate("/contact") : null
          }
          buttonBgColor="bg-secondaryRed"
          buttonTextColor="text-white"
        />
      </div>
      <div className="w-screen xl:bg-accentAqua xl:h-80 xl:flex xl:flex-col xl:justify-end xl:mt-40">
        <div className="flex items-center justify-around flex-wrap w-screen">
          {dataToDisplay.map((el) => (
            <FlipCard
              backCardTxt={el.text}
              src={el.src}
              alt={el.alt}
              cardTitle={el.title}
              key={el.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Services;
