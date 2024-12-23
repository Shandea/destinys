import { useState } from "react";
import Banner from "../Components/Banner";
import ProductModal from "../Components/ProductModal";
import ProductPage from "../Components/ProductPage";
import data from "../../Utilities/helpers";
import cookieBanner from "../../Assets/Images/BannerImages/CookieWhiteChocolateSideWays.png";

const Cookies = () => {
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
  const { cookieBlurb, cookieData } = data;
  const productData = cookieData.filter(Boolean);
  return (
    <>
      <Banner src={cookieBanner} alt="white choclate strawberry cookies" />

      {modal ? (
        <ProductModal
          src={productDetails.src}
          title={productDetails.title}
          closeModal={closeModal}
          description={productDetails.description}
        />
      ) : (
        <ProductPage
          blurb={cookieBlurb}
          ProductTitle="Our Cookies"
          productData={productData}
          openModal={openModal}
        />
      )}
    </>
  );
};

export default Cookies;
