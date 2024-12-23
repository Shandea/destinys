import { useNavigate } from "react-router";
import { FiX } from "react-icons/fi";

import Image from "./Image";

const ProductModal = ({ src, alt, title, description, closeModal }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center p-4">
        <div className="md:w-4/5 lg:w-3/5 xl:w-1/2 w-full border-4 border-primaryBlue flex flex-col items-end p-2">
          <button onClick={closeModal} className="text-4xl text-primaryBlue">
            <FiX />
          </button>

          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="size-80 lg:size-80 xl:size-96">
              <Image src={src} alt={alt} />
            </div>

            <div className="flex flex-col justify-around items-center w-full lg:w-1/2 lg:min-h-96">
              <h1 className="h1 text-center text-primaryBlue">{title}</h1>
              <p className="p text-center text-primaryBlue">{description}</p>

              <a
                href={window.innerWidth <= 768 ? "tel:15206869449" : undefined}
                className="w-full"
              >
                <button
                  onClick={
                    window.innerWidth > 768 ? () => navigate("/contact") : null
                  }
                  className="bg-secondaryRed w-full hover:opacity-90 focus:shadow-lg xl:text-xl lg:text-xl md:text-lg sm:text-sm xs:text-sm shadow-lg rounded-3xl p-2 text-white"
                >
                  ORDER NOW
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
