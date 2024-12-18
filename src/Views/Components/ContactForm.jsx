import Button from "./Button";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_utwvtsj", "template_hcm411h", form.current, {
        publicKey: "z6PYtEF8F9oJGItEQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setName("");
          setPhonenumber("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="border-2 border-accentAqua p-2 md:w-1/2 flex flex-col items-center justify-center">
        <form onSubmit={sendEmail} ref={form} className="my-5">
          <label className="text-primaryBlue">
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
          </label>
          <label className="text-primaryBlue">
            Phone Number:
            <input
              type="tel"
              name="phonenumber"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              className="input"
            />
          </label>
          <label className="text-primaryBlue">
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </label>
          <label className="text-primaryBlue">
            Message:
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="textarea resize-none"
            />
          </label>
          <div className="py-5 flex justify-center">
            <Button
              text="Send"
              backgroundColor="bg-secondaryRed"
              textColor="text-white"
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
