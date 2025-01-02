import charityGirl from "../../Assets/Images/CharityGirl.png";
import community from "../../Assets/Images/Community.png";
import charity from "../../Assets/Images/Charity.png";

import Image from "../Components/Image";

const threeImagesData = [
  { src: charity, alt: "a charity event", id: 1 },
  { src: charityGirl, alt: "a girl at a charity event", id: 2 },
  { src: community, alt: "a community charity event", id: 3 },
];

const ThreeImages = () => {
  const data = threeImagesData.filter(Boolean);
  return (
    <>
      <div className="w-full xl:bg-accentAqua xl:h-60 xl:flex xl:flex-col xl:justify-end xl:mt-60 xl:pb-4">
        <div className="flex items-center justify-center flex-wrap">
          {data.map((el, ind) => (
            <div
              className={`${
                ind === 1 ? "xl:size-96 size-80" : "size-80"
              } mt-4 mx-4`}
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
