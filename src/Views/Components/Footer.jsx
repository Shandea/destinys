import DBLogo from "../../Assets/Logo/DBLogo.png"
import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <footer className="bg-[#c2f0e6] text-primaryBlue fixed bottom-0 w-full p-4 shadow-md flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
                <a
                    href="tel:15206869449"
                    className="flex items-center hover:text-secondaryRed"
                    aria-label="Call Destiny's Bakery"
                >
                    <PhoneIcon className="h-6 w-6 text-secondaryRed" />
                    <span className="hidden sm:inline">(520) 686-9449</span>
                </a>
            </div>
            <div>
                <button
                    onClick={scrollToTop}
                    className="text-secondaryRed font-bold text-xl"
                >
                    <img src={DBLogo} className="h-20 " />
                </button>
            </div>
            <div className="flex items-center space-x-2">
                <a
                    href="mailto:destinysbakery@gmail.com"
                    className="flex items-center hover:text-secondaryRed"
                    aria-label="Email Destiny's Bakery"
                >
                    <EnvelopeIcon className="h-6 w-6 text-secondaryRed" />
                    <span className="hidden sm:inline">destinysbakery@gmail.com</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;