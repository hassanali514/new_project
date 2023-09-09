import React, { Fragment } from "react";
import './slider.css';
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlinePhone, AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineArrowRight } from 'react-icons/ai';
import ReactWhatsapp from 'react-whatsapp';
// import Carousel from 'react-bootstrap/Carousel';
import {Carousel} from "react-bootstrap";
import slide1 from '../../../Assets/images/slider1.jpg'
import slide2 from '../../../Assets/images/slider2.jpeg'
import slide3 from '../../../Assets/images/slider3.jpg'



const Slider = () => {
    return (
        <Fragment>
            <div className="vw-100 vh-100 carousel-parent" style={{ background: 'skyblue' }}>

                <div className="container d-flex contact-shortcuts">
                    <div className='col-lg-2 d-flex py-3 align-items-center justify-content-center'>
                        <Link className="nav-link mx-1" to='/'><AiOutlineMail /></Link>
                        <span>mmclimited@gmail.com</span>
                    </div>
                    <div className='col-lg-2 d-flex py-3 align-items-center justify-content-center'>
                        <Link className="nav-link mx-1" to='/'><AiOutlinePhone /></Link>
                        <span>+971 56 3782 441</span>
                    </div>
                    <div className='col-lg-6'></div>
                    <div className='col-lg-2 d-flex py-3 align-items-center justify-content-center social-links'>
                        <div>
                            <Link className="nav-link mx-2" to='/'><AiOutlineFacebook /></Link>
                        </div>
                        <div>
                            <Link className="nav-link mx-2" to='/'><AiOutlineTwitter /></Link>
                        </div>
                        <div>
                            <Link className="nav-link mx-2" to='/'><AiOutlineInstagram /></Link>
                        </div>
                        <div>
                            <ReactWhatsapp number="+971 522509545"><AiOutlineWhatsApp className='icon' /></ReactWhatsapp>
                        </div>
                    </div>
                </div>

                <Carousel>
                    <Carousel.Item>
                        <div className="items-parent-class">

                            <div className='container carouselOverlay'>
                                <div className='row col-lg-8'>
                                    <div className='col-lg-12'><h3>IBRAHIM AL NABOODAH HR CONSULTANCY</h3></div>
                                    <div className='col-lg-12'><p>has come a long way starting with 1 company started in October 2001 and by achieving dynamic growth and success along the way has over 50 various companies. As Chairman I'm focused on continuing the legacy and to build on our heritage with the underlying ethos of Credibility, Integrity, Collaboration, Accountability, Respect, Excellence and Diversity.</p></div>
                                    <div className='col-lg-12'>
                                        <button>Our Story <AiOutlineArrowRight /></button>
                                    </div>
                                </div>
                            </div>

                            <img
                                className="d-block w-100"
                                src={slide1}
                                alt="First slide"
                            />

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>

                        <div className="items-parent-class">

                            <div className='container carouselOverlay'>
                                <div className='row col-lg-8'>
                                    <div className='col-lg-12'><h3>One Brand, One Team, One Vision</h3></div>
                                    <div className='col-lg-12'><p>Saif Belhasa Holding’s vision is to be as a responsible, reliable and respectable business conglomerate and to be the partner of choice for international and regional corporations. Our vision aspires to achieve sustainable exponential and dynamic growth for the entire group.</p></div>
                                    <div className='col-lg-12'>
                                        <button>Read More <AiOutlineArrowRight /></button>
                                    </div>
                                </div>
                            </div>

                            <img
                                className="d-block w-100"
                                src={slide2}
                                alt="Second slide"
                            />

                        </div>

                    </Carousel.Item>
                    <Carousel.Item>

                        <div className="items-parent-class">

                            <div className='container carouselOverlay'>
                                <div className='row col-lg-8'>
                                    <div className='col-lg-12'>Diversified Business</div>
                                    <div className='col-lg-12'>Saif Belhasa Holding is a diversified business with multiple sectors under its portfolio, Each business division of Saif Belhasa holding follow responsible business practices with intelligent diversification to achieve strong, sustainable growth and to provide flexible customer solutions through its portfolio.</div>
                                    <div className='col-lg-12'>
                                        <button>View All Sectors <AiOutlineArrowRight /></button>
                                    </div>
                                </div>
                            </div>

                            <img
                                className="d-block w-100"
                                src={slide3}
                                alt="Third slide"
                            />

                        </div>

                    </Carousel.Item>

                </Carousel>

            </div>
        </Fragment>
    )
}

export default Slider;