import FlipCard from "../Components/Cards/FlipCard";
import ButtonCard from "../Components/Cards/ButtonCard";
import data from "../../Utilities/helpers";
const servicesBlurb = data.servicesBlurb;
const flipCardData = data.flipCardData;

const Services = () => {
  return (
    <>
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
          {flipCardData.map((el) => (
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
