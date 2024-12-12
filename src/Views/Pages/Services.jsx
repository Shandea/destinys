import FlipCard from "../Components/Cards/FlipCard";
import data from "../../Utilities/helpers";
const flipCardData = data.flipCardData;

const Services = () => {
  return (
    <>
      {flipCardData.map((el) => (
        <FlipCard backCardTxt={el.text} src={el.src} alt={el.alt} key={el.id} />
      ))}
    </>
  );
};
export default Services;
