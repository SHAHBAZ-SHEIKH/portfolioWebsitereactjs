import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Shahbaz Ahmed</h3>
        <p className="text-lg font-normal text-gray-400">
          Frontend Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a passionate frontend developer. I have experience in HTML, CSS, and JavaScript, React js and I love creating responsive and interactive web applications. Take a look at my projects and feel free to get in touch if you'd like to collaborate!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">03122372788</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ashabaz845@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <a href="https://github.com/SHAHBAZ-SHEIKH?tab=repositories" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
          </span>
          <span className="bannerIcon">
            <a href="www.linkedin.com/in/shabaz-ahmed123" target='_blank' rel="noopener noreferrer"><FaLinkedinIn /></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft