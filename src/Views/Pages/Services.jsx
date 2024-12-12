import FlipCard from "../Components/Cards/FlipCard";
import data from "../../Utilities/helpers";
const flipCardData = data.flipCardData;

const Services = () => {
  return (
    <>
      <div className="flex items-center justify-around flex-wrap w-screen">
        {flipCardData.map((el) => (
          <FlipCard
            backCardTxt={el.text}
            src={el.src}
            alt={el.alt}
            key={el.id}
          />
        ))}
      </div>
    </>
  );
};
export default Services;
