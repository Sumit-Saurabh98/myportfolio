import React from "react";
import '../Styles/Contact.css';
import {
    FaLinkedinIn,
    FaGithub,
    FaMailBulk,
    FaMobileAlt,
    FaHome,
    FaWhatsapp
} from "react-icons/fa";


export const Contact = () => {
    return (
        <div className="ContactContainer nav-link contact" id="contactSection">
            <div>
                <h1>Contact Me</h1>
                <div>
                    <h3 id="contact-phone"><FaMobileAlt className="contactlogotop" />&nbsp;Contact No.&nbsp; › &nbsp;<span>+919318411328</span></h3>
                    <h3 id="contact-email">
                        <a href="mailto:sumitsaurabh112@gmail.com" target="_blank" rel="noreferrer">
                            <FaMailBulk className="contactlogotop" />&nbsp;&nbsp;Email Id &nbsp; › &nbsp;<span>sumitsaurabh112@gmail.com</span>
                        </a>
                    </h3>
                    <h3><FaHome className="contactlogotop" />&nbsp;&nbsp; Address&nbsp; › <span>New Delhi, Delhi</span></h3>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/sumit-saurabh-98ss/" target="_blank" rel="noreferrer" id="contact-linkedin"><FaLinkedinIn className="contactlogo" /></a>
                    <a href="https://github.com/Sumit-Saurabh98" target="_blank" rel="noreferrer" id="contact-github"><FaGithub className="contactlogo" /></a>
                    <a href="mailto:sumitsaurabh112@gmail.com" target="_blank" rel="noreferrer" id="contact-email"><FaMailBulk className="contactlogo" /></a>
                    <a href="https://wa.me/+919318411328" target="_blank" rel="noreferrer"><FaWhatsapp className="contactlogo" /></a>
                </div>
                <div>
                    <p className="thank-you">Thank you for visiting my portfolio!</p>
                </div>
            </div>
        </div>
    );
}