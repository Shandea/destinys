import Banner from "../Components/Banner";
import doughnutsBlue from "../../Assets/Images/BannerImages/DoughnutBlue.jpg";
import Slogan from "../Components/Slogan";
import Blurb from "../Components/Blurb";
import Carousel from "../Components/Carousel";
import Image from "../Components/Image";
import CharityHelping from "../../Assets/Images/CharityHelping.png";
import Button from "../Components/Button"


const Community = () => {
  return (
    < div className="space-y-8 p-5">
      <Banner src={doughnutsBlue} alt="multiple donuts on a blue background" />
      
      <Slogan />
      <Carousel />
      <div className="flex flex-col md:flex-row items-center gap-4 p-5">
        <Image
          src={CharityHelping}
          alt="Picture of a women hellping at a fundraiser"
          className=" border-accentAqua border-4  rounded-3xl h-full w-full object-cover"
        />
        <Blurb className="p-5 text-center" text=" At Destiny’s Bakery, we go beyond baking to make a difference. We proudly support low-income families, children’s homes, and women’s and men’s shelters by donating special treats to brighten their days. From ensuring families have desserts for their children’s special occasions to creating moments of joy for those in need, we’re here to help. If you know a family or organization that could use our support, please reach out—we’re committed to spreading love and kindness throughout our community. We believe in giving back to the community that supports us. If you know someone in need or have a cause close to your heart, reach out to us—we’re always ready to lend a helping hand. Together, we can spread joy, kindness, and hope where it’s needed most." />
      </div>
      <div className="flex justify-center">
        <Button
          backgroundColor="bg-[#d63d52]"
          textColor="text-white"
          text="Donate today!"
        />
      </div>
    </div>

  );
};

export default Community;
