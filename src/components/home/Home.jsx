import React from 'react'
import shapeOne from '../../assets/shape-1.png'
import { FaLinkedin, FaGithub, FaDev } from "react-icons/fa";

import './home.css'

const Home = () => {
    return (
        <section className="home" id="about">
            <div className="home__wrapper">
                <div className="home__container container">
                    <p className="home__subtitle text-cs">
                        Hello, <span>my name is</span>
                    </p>

                    <h1 className="home__title text-cs">
                        <span>AMRIT</span>
                    </h1>

                    <p className="home__job">
                        <span className="text-cs">i am a</span> <b>Full Stack Developer</b>
                    </p>

                    {/* <div className="home__img-wrapper">
                        <div className="home__banner">
                            <img src={profileImg} alt="" className='home__profile' />
                        </div>

                        <p className="home__data home__data-one">
                            <span className="text-lg">
                                12 <b>+</b>
                            </span>

                            <span className="text-sm text-cs">
                                Years of <span>Experience</span>
                            </span>
                        </p>

                        <p className="home__data home__data-two">
                            <span className="text-lg">
                                330
                            </span>

                            <span className="text-sm text-cs">
                                Completed <span>Projects</span>
                            </span>
                        </p>

                        <img src={shapeOne} alt="" className="shape shape__1" />
                        <img src={shapeTwo} alt="" className="shape shape__2" />
                        <img src={shapeTwo} alt="" className="shape shape__3" />
                    </div> */}

                    <p className="home__text mt-0">
                        I specialize in getting things done!🧙‍♂️
                    </p>

                    <div className="home__socials">
                        <a href="https://www.linkedin.com/in/amrit-kumar-975965266/" target='_blank' className="home__social-link">
                            <FaLinkedin />
                        </a>

                        <a href="https://github.com/PirateKing55" target='_blank' className="home__social-link">
                            <FaGithub />
                        </a>

                        <a href="" target='_blank' className="home__social-link">
                            <FaDev />
                        </a>
                    </div>

                    <div className="home__btns">
                        <a href="https://drive.google.com/file/d/19iFXfer8VtntkmuA_vy05TzSc3T2JTel/view?usp=sharing" target='_blank' className="btn text-cs">
                            Resume
                        </a>

                        <a href="#projects" className="hero__link text-cs">
                            My Projects
                        </a>
                    </div>
                </div>

                <div className="section__deco deco__left">
                    <img src={shapeOne} alt="" className='shape' />
                </div>
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title">Web Developer</span>
            </div>
        </section>
    )
}

export default Home