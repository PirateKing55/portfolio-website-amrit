import React from 'react'
import { motion } from 'framer-motion'


const Items = ({ skillItems }) => {
    return (
        <>
            {
                skillItems.map((skillItem) => {
                    const { id, name, category, icon } = skillItem

                    return (
                        <motion.div
                            layout
                            animate={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0.8, scale: 0.6 }}
                            exit={{ opacity: 0.8, scale: 0.6 }}
                            transition={{ duration: 0.3 }}
                            className="skill__items card card-two"
                            key={id}
                        >
                            <div className='skill__item'>
                                {/* <img src={icon} alt={name} /> */}
                                <h3>{name}</h3>
                            </div>
                            {/* <div className="portfolio__img-wrapper">
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
                            </div> */}

                            {/* <a href="#pricing" className="link">
                                See Pricing
                                <FaArrowRight className='link__icon' />
                            </a> */}

                            {/* <img src={shapeTwo} alt="" className="shape c__shape" /> */}
                        </motion.div>
                    )
                })
            }
        </>
    )
}

export default Items