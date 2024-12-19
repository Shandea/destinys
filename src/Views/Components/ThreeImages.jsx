import charityGirl from "../../Assets/Images/CharityGirl.png";
import community from "../../Assets/Images/Community.png";
import charity from "../../Assets/Images/Charity.png";

import Image from "../Components/Image";

const data = [
  { src: charityGirl, alt: "a girl at a charity event", id: 1 },
  { src: community, alt: "a community charity event", id: 2 },
  { src: charity, alt: "a charity event", id: 3 },
];

const ThreeImages = () => {
  return (
    <>
      <div className="w-screen xl:bg-accentAqua xl:h-60 xl:flex xl:flex-col xl:justify-end xl:mt-60">
        <div className="flex items-center justify-center flex-wrap w-screen">
          {data.map((el, ind) => (
            <div
              className={`${
                ind === 1 ? "h-96 w-96" : "xl:h-80 xl:w-80 h-96 w-96"
              } m-4`}
              key={el.id}
            >
              <Image src={el.src} alt={el.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThreeImages;
