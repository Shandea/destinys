import Banner from "../Components/Banner";
import Carousel from "../Components/Carousel";
import doughnutsBlue from "../../Assets/Images/BannerImages/DoughnutBlue.jpg";

const Community = () => {
  return (
    <>
      <Banner src={doughnutsBlue} alt="multiple donuts on a blue background" />
      <h1>Community</h1>
      <Carousel/> 
         </>
  );
};
export default Community;
