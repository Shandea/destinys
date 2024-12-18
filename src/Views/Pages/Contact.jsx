import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";
import Title from "../Components/Title";
import Blurb from "../Components/Blurb";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col">
        <Title text="Contact Us" />
        <div className="border-y-2 border-accentAqua">
          <Blurb text="We’d love to hear from you! Whether you have questions, need a custom order, or want to learn more about how we can sweeten your special moments, Destiny’s Bakery is here to help. Reach out to us anytime—we’re just a call, message, or visit away. Let us bring a little more joy to your day!" />
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
