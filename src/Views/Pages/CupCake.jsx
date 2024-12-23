import { useState } from "react";
import Banner from "../Components/Banner";
import ProductModal from "../Components/ProductModal";
import ProductPage from "../Components/ProductPage";
import data from "../../Utilities/helpers";
import cupcakeBanner from "../../Assets/Images/BannerImages/CupcakesBanner.jpg";

const CupCake = () => {
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
  const { cupCakeBlurb, cupCakeData } = data;
  const productData = cupCakeData.filter(Boolean);
  return (
    <>
      <Banner src={cupcakeBanner} alt="teal cupcakes with sprinkles" />
      {modal ? (
        <ProductModal
          src={productDetails.src}
          title={productDetails.title}
          closeModal={closeModal}
          description={productDetails.description}
        />
      ) : (
        <ProductPage
          blurbText={cupCakeBlurb}
          productTitle="Our Cupcakes"
          productData={productData}
          openModal={openModal}
        />
      )}
    </>
  );
};

export default CupCake;
