import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import HomeBanner from './HomeBanner';
import PopularSpecialty from './Section/PopularSpecialty';
class HomePage extends Component {

    render() {

        return (
            <>
                <div>
                    <HomeHeader />
                    <HomeBanner />
                    <PopularSpecialty />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
