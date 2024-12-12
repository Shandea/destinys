import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const FlipCard = ({ src, alt, backCardTxt }) => {
  const [isFlipped, setFlipped] = useState(false);
  const flipTheCard = () => setFlipped(!isFlipped);
  return (
    <>
      <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
        <div
          className="h-72 w-72 bg-blue-950 text-white rounded-2xl"
          onClick={flipTheCard}
        >
          <img src={src} alt={alt} />
        </div>

        <div
          className="h-72 w-72 bg-blue-500 rounded-2xl"
          onClick={flipTheCard}
        >
          <p>{backCardTxt}</p>
        </div>
      </ReactCardFlip>
    </>
  );
};

export default FlipCard;
