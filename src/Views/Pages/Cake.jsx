import { useState } from "react";
import Banner from "../Components/Banner";
import ProductModal from "../Components/ProductModal";
import ProductPage from "../Components/ProductPage";
import data from "../../Utilities/helpers";
import cakeStar from "../../Assets/Images/BannerImages/CakeStar.jpg";

const Cake = () => {
  const [modal, setOpenModal] = useState(false);
  const [productDetails, setProductDetails] = useState({});

  const openModal = (product) => {
    setOpenModal(true);
    setProductDetails(product);
  };
  const closeModal = () => {
    setOpenModal(false);
    setProductDetails({});
  };

  const { cakeBlurb, cakeData } = data;
  const productData = cakeData.filter(Boolean);

  return (
    <>
      <Banner src={cakeStar} alt="a frosted cake with stars on it" />
      {modal ? (
        <ProductModal
          src={productDetails.src}
          title={productDetails.title}
          closeModal={closeModal}
          description={productDetails.description}
        />
      ) : (
        <ProductPage
          blurbText={cakeBlurb}
          productTitle="Our Cakes"
          productData={productData}
          openModal={openModal}
        />
      )}
    </>
  );
};

export default Cake;
