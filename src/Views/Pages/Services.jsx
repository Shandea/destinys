import FlipCard from "../Components/Cards/FlipCard";
import ButtonCard from "../Components/Cards/ButtonCard";
import Blurb from "../Components/Blurb";
import data from "../../Utilities/helpers";
const servicesBlurb = data.servicesBlurb;
const flipCardData = data.flipCardData;

const Services = () => {
  return (
    <>
      {/* <ButtonCard
          blurbText={servicesBlurb}
          blurbTextColor="primaryBlue"
          buttonText="Give Us A Call!"
          buttonOnClick={null}
          buttonBgColor="primaryBlue"
          buttonTextColor="white"
        /> */}

      <div className="flex flex-col items-center p-5 border-accentAqua border-y-2 my-4">
        <Blurb text={servicesBlurb} textColor="primaryBlue" />
        <button className="btn bg-primaryBlue text-white" onClick={null}>
          Give Us A Call!
        </button>
      </div>

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
    </>
  );
};
export default Services;
