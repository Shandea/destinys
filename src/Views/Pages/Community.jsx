import Banner from "../Components/Banner";
import doughnutsBlue from "../../Assets/Images/BannerImages/DoughnutBlue.jpg";
import Slogan from "../Components/Slogan";


const Community = () => {
  return (
    <>
      <Banner src={doughnutsBlue} alt="multiple donuts on a blue background" />
      <h1>Community</h1>
      <Slogan />
    </>
  );
};
export default Community;
