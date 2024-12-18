import Banner from "../Components/Banner";
import ButtonCard from "../Components/Cards/ButtonCard";
import FlipCard from "../Components/Cards/FlipCard";

import donutsPink from "../../Assets/Images/BannerImages/DoughnutPink.jpg";

import data from "../../Utilities/helpers";

const Services = () => {
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
          buttonOnClick={null}
          buttonBgColor="bg-primaryBlue"
          buttonTextColor="text-white"
        />
      </div>
      <div className="xl:bg-accentAqua h-80 w-screen xl:flex xl:flex-col xl:justify-end xl:mt-40">
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
