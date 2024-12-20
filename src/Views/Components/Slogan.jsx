import cupcake from "../../Assets/Icons/CupcakeIcon.png";
import aqua from "../../Assets/Images/aqua-ribbon.jpg";

const Slogan = () => {
  return (
    <>
     <section className="flex flex-col items-center">
        <div className="text-center text-xl mt-12 mb-8 text-primaryBlue">
          "Spreading Joy, One Sweet Bite at a Time!"
        </div>

        <div className="relative w-full flex items-center justify-center">
          <img
            src={aqua}
            alt="aqua blue ribbon across page"
            className="absolute w-full h-[8%]"
          />
          <img
            src={cupcake}
            alt="tiny colorful cupcake with frosting"
            className="relative w-20 h-20"
          />
        </div>
      </section>
    </>
  );
};

export default Slogan;