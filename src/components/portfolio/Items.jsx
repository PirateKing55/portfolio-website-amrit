import React from 'react'
import shapeTwo from '../../assets/shape-2.png'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";


const Items = ({ projectItems }) => {
    return (
        <>
            {
                projectItems.map((projectItem) => {
                    const { id, img, category, title, description, websiteLink, githubLink } = projectItem

                    return (
                        <motion.div
                            layout
                            animate={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0.8, scale: 0.6 }}
                            exit={{ opacity: 0.8, scale: 0.6 }}
                            transition={{ duration: 0.3 }}
                            className="portfolio__items card card-two"
                            key={id}
                        >
                            <div className="portfolio__img-wrapper">
                                <a href={websiteLink} target='_blank'>
                                    <img src={img} alt="" className="portfolio__img" />
                                </a>
                            </div>

                            <span className="portfolio__category text-cs">{category}</span>
                            <h3 className="portfolio__title">{title}</h3>
                            <p className="portfolio__description">{description}</p>

                            <div className='portfolio__links'>
                                <a href={githubLink} target="_blank"><FaGithub size={25} /></a>
                                <a href={websiteLink} target="_blank"><FaRegEye size={25} /></a>
                            </div>

                            {/* <a href="#pricing" className="link">
                                See Pricing
                                <FaArrowRight className='link__icon' />
                            </a> */}

                            <img src={shapeTwo} alt="" className="shape c__shape" />
                        </motion.div>
                    )
                })
            }
        </>
    )
}

export default Items