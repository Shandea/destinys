import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import FlipCardSide from "./FlipCardSide";
import CardTitle from "./CardTitle";

const FlipCard = ({ src, alt, backCardTxt, cardTitle }) => {
  const [isFlipped, setFlipped] = useState(false);
  const flipTheCard = () => setFlipped(!isFlipped);
  return (
    <>
      <div className="flex flex-col">
        <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
          <FlipCardSide flipTheCard={flipTheCard}>
            <img
              className="w-full h-full rounded-3xl object-cover"
              src={src}
              alt={alt}
            />
          </FlipCardSide>
          <FlipCardSide flipTheCard={flipTheCard}>
            <p className="p text-center p-4 text-white">{backCardTxt}</p>
          </FlipCardSide>
        </ReactCardFlip>
        <CardTitle cardTitle={cardTitle} />
      </div>
    </>
  );
};

export default FlipCard;
