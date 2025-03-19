import React from 'react'
import { FaLinkedin, FaGithub, FaDev } from "react-icons/fa";
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/in/amrit-kumar-975965266/" target='_blank' className="footer__social-link">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/PirateKing55" target='_blank' className="footer__social-link">
                        <FaGithub />
                    </a>

                    <a href="" target='_blank' className="footer__social-link">
                        <FaDev />
                    </a>
                </div>

                {/* <p className="footer__copyright text-cs">
                    &copy; 2023 <span>Luique</span>. All Rights Reserved
                </p>

                <p className="footer__copyright text-cs">
                    Developed by <span>CrypticalCoder</span>
                </p> */}
            </div>
        </footer>
    )
}

export default Footer