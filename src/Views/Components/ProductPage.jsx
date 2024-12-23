import { useNavigate } from "react-router";
import ButtonCard from "./Cards/ButtonCard";
import Title from "./Title";
import Image from "./Image";
import CardTitle from "./Cards/CardTitle";

const ProductPage = ({ blurb, productTitle, productData, openModal }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="my-4">
        <ButtonCard
          blurbText={blurb}
          blurbTextColor="text-primaryBlue"
          buttonText="Call To Order!"
          buttonBgColor="bg-primaryBlue"
          buttonTextColor="text-white"
          buttonOnClick={
            window.innerWidth > 768 ? () => navigate("/contact") : null
          }
        />
        <div className="my-4">
          <Title text={productTitle} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productData.map((product) => (
            <div
              key={product.id}
              className="w-full flex flex-col justify-center items-center"
            >
              <div className="h-80 w-80">
                <Image src={product.src} alt={product.alt} />
              </div>
              <div
                onClick={() => openModal(product)}
                className="my-2 cursor-pointer"
              >
                <CardTitle cardTitle={product.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
