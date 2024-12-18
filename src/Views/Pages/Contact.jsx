import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";
import Title from "../Components/Title";
import Blurb from "../Components/Blurb";

import Banner from "../Components/Banner";
import contactBannerPic from "../../Assets/Images/BannerImages/ContactBanner.jpg";

import data from "../../Utilities/helpers";

const Contact = () => {
  const blurbText = data.contactBlurbText;
  return (
    <>
      <Banner src={contactBannerPic} alt="donut with sprinkles" />
      <div className="flex flex-col">
        <Title text="Contact Us" />
        <div className="border-y-2 border-accentAqua">
          <Blurb text={blurbText} textColor="text-primaryBlue" />
        </div>
        <div className="flex flex-col md:flex-row p-5 space-x-10 justify-around">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </>
  );
};
export default Contact;
