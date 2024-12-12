import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import FlipCardSide from "./FlipCardSide";

const FlipCard = ({ src, alt, backCardTxt }) => {
  const [isFlipped, setFlipped] = useState(false);
  const flipTheCard = () => setFlipped(!isFlipped);
  return (
    <>
      <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
        <FlipCardSide flipTheCard={flipTheCard}>
          <img className="w-full h-full rounded-3xl" src={src} alt={alt} />
        </FlipCardSide>
        <FlipCardSide flipTheCard={flipTheCard}>
          <p className="p text-center p-4 text-white">{backCardTxt}</p>
        </FlipCardSide>
      </ReactCardFlip>
    </>
  );
};

export default FlipCard;
