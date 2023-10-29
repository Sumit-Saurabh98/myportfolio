import "../Styles/AboutMe.css";
import React from "react";
import Sumit_Saurabh_Resume from "../download/Sumit_Saurabh_Resume.pdf";
import logo from "../assets/img_about_me.webp";
import { DownloadIcon } from "@chakra-ui/icons";

export const AboutMe = () => {

  const onClickhandler = () => {
    return window.open(
      "https://drive.google.com/drive/folders/1ULxd1SN4qDdBKYSGvc-zXOM43eE36tgY?usp=sharing",
      "_blank"
    );
};

  return (
    <div id="aboutMe" className="nav-link about">
      <div className="aboutMeContainer">
        <h1>About Me</h1>
        <div className="aboutMeDecription">
          <div className="developerImage">
            <img src={logo} alt="developers img" />
          </div>
          <div className="MyDescription">
            <h3 id="user-detail-name">Full Stack Web Developer.</h3>
            <div className="aboutmeDetails" id="user-detail-intro">
            I'm Sumit Saurabh, a dedicated Full Stack Web Developer specializing in MERN (MongoDB, Express.js, React.js, Node.js) development. With a passion for continuous learning, I created exceptional web applications using technologies like HTML, CSS, JavaScript, and React.js, Node.js. Express, MongoDB. I thrive on problem-solving, enjoy collaborating with teams, and have a portfolio showcasing my attention to detail and dedication to delivering high-quality results.
            </div>
            <div className="buttons">
              <button>
                <a href="#contactPageSection">
                  Hire me
                </a>
              </button>
              <button id="resume-button-2">
                <a 
                  target="_blank"
                  alt="Resume"
                  href={Sumit_Saurabh_Resume}
                  download={true}
                  onClick={onClickhandler}
                  id="resume-link-2"
                  rel="noreferrer"
                >
                  Resume<DownloadIcon/>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}