import '../Styles/Home.css';
import {
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";
import Typical from "react-typical";
import Sumit_Saurabh_Resume from "../download/Sumit_Saurabh_Resume.pdf";
import { DownloadIcon } from '@chakra-ui/icons';
import sumit from "../Image/sumit_profile.jpg";

const HomePage = () => {

    const onClickhandler = () => {
        return window.open(
          "https://drive.google.com/drive/folders/1ULxd1SN4qDdBKYSGvc-zXOM43eE36tgY?usp=sharing",
          "_blank"
        );
    };


    return (
        <div id='Home' className="nav-link home">
            <div className="container">
                <div>
                    <div className="description">
                        <div className="profile-details">
                            <div className="colz">
                                <div className="colz-icon">
                                    <a
                                        href="https://www.linkedin.com/in/sumit-saurabh-98ss/"
                                        target="_blank"
                                        alt="linked in"
                                        rel="noreferrer"
                                    >
                                        <i className="">
                                            <FaLinkedinIn className='icon-ease-out' />
                                        </i>
                                    </a>
                                    <a
                                        href="https://github.com/Sumit-Saurabh98"
                                        target="_blank"
                                        alt="github"
                                        rel="noreferrer"
                                    >
                                        <i className="">
                                            <FaGithub className='icon-ease-out' />
                                        </i>
                                    </a>
                                </div>
                            </div>

                            <div className="profile-details-role">
                                <h6>
                                    Hello, I'm
                                    <span className="highlighted-text">
                                        &nbsp;{" Sumit Saurabh "}
                                    </span>
                                </h6>
                                <span className="primary-text">
                                    <>
                                        <Typical
                                            loop={Infinity}
                                            steps={[
                                                "Full Stack Web Developer",
                                                2000,
                                                "MERN Stack Developer",
                                                2000,
                                                "Frontend Developer",
                                                2000,
                                                "Backend Developer",
                                                2000,
                                                "Technical Mentor",
                                                2000,
                                            ]}
                                        />
                                    </>
                                </span>
                                <span className="profile-tag-line">
                                    Full Stack Web Developer | Technical Mentor at <span><a style={{textDecoration:"none"}} href="https://kalvium.com/">kalvium</a></span>
                                </span>
                            </div>

                            <div>
                                <a href='#contactSection'><button className="btn primary-btn"> Hire Me </button></a>
                                <a
                                    target="_blank"
                                    alt="Resume"
                                    href={Sumit_Saurabh_Resume}
                                    download={true}
                                    onClick={onClickhandler}
                                    id="resume-link-1"
                                    rel="noreferrer"
                                >
                                    <button className="btn highlighted-btn" id="resume-button-1">
                                        Get Resume<DownloadIcon />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="imagebox">
                        <div className="profile-picture">
                            <div className="profile-picture-background">
                                <img
                                    src={sumit}
                                    className='home-img'
                                    alt="Sumit Saurabh"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr color='black' id='aboutMePageSection' />
        </div>
    );
}

export default HomePage;