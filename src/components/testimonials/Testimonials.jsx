import React from 'react'
import shapeOne from '../../assets/shape-1.png'
// import shapeTwo from '../../assets/shape-2.png'
// import testimonialIcon from '../../assets/testimonials-icon.svg'
// import { testimonials } from '../../Data'
// import { blogs } from '../../Data'
// import Blog1 from '../../assets/blog1.jpg'
// import Blog2 from '../../assets/blog2.jpg'
// import Blog3 from '../../assets/blog3.jpg'

// import { FaArrowRight } from 'react-icons/fa'

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
// import { Pagination } from "swiper"

import './testimonials.css'

const Testimonials = () => {
    return (
        <section className="testimonials section" id="blogs">
            <h2 className="section__title text-cs">My Blogs</h2>
            <p className="section__subtitle">
                My <span>Articles and Advice</span>
            </p>

            <div className='w-ful flex justify-center'>
                <p className="section__subtitle"><span>Coming Soon...</span></p>
            </div>

            {/* <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    540: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="testimonials__container container mySwiper"
            >{blogs.map(({ id, date, title, description, blogLink, img }) => {
                return (
                    <SwiperSlide className="testimonials__item card card-one" key={id}>

                        <span className="blog__date text-cs">{date}</span>
                        <h3 className="blog__title">{title}</h3>
                        <p className="blog__description">
                            {description}
                        </p>

                        <a href={blogLink} target="_blank" className="link">
                            Read more
                            <FaArrowRight className='link__icon' />
                        </a>


                        <div className="testimonial__header">
                            <div className="testimonial__icon">
                                <img src={testimonialIcon} alt="" />
                            </div>

                            <img src={img} alt="" className="testimonial__img" />
                        </div>

                    </SwiperSlide>
                )
            })}
            </Swiper> */}

            <div className="section__deco deco__right">
                <img src={shapeOne} alt="" className='shape' />
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title">Blogs</span>
            </div>
        </section>
    )
}

export default Testimonials