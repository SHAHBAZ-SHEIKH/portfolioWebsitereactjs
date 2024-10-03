import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss,  SiJavascript,SiBootstrap} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <a href="https://github.com/SHAHBAZ-SHEIKH?tab=repositories" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
            </span>
            <span className="bannerIcon">
              <a href="www.linkedin.com/in/shabaz-ahmed123" target='_blank' rel="noopener noreferrer"><FaLinkedinIn /></a>
              
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiBootstrap />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media