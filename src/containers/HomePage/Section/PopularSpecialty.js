import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './PopularSpecialty.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoXuongKhop from "../../../assets/popular-specialty/co-xuong-khop.jpg";

//import Specialty from './Section/Specialty';
class PopularSpecialty extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2
        };
        return (
            <>
                <div className='section-specialty'>
                    <div className='specialty-container'>
                        <div className='specialty-header'>
                            <span className='header-title'>Chuyen Khoa Pho Bien</span>
                            <button className='header-btn'>XEM THEM</button>
                        </div>
                        <div className='specialty-body'>
                            <Slider {...settings}>
                                <div className='specialty-customize'>
                                    <div className='bg-image' />
                                    <span>Cơ Xương Khớp</span>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-image' />
                                    <span>Cơ Xương Khớp</span>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-image' />
                                    <span>Cơ Xương Khớp</span>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-image' />
                                    <span>Cơ Xương Khớp</span>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-image' />
                                    <span>Cơ Xương Khớp</span>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-image' />
                                    <span>Cơ Xương Khớp</span>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-image' />
                                    <span>Cơ Xương Khớp</span>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularSpecialty);
