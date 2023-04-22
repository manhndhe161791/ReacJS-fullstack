import { React, Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { Fragment } from 'react';


class Login extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Fragment>
                <div className='login-background'>
                    <div className='login-container'>
                        <div className='login-content row'>
                            <div className='col-12 login-text'>LOGIN</div>
                            <div className='col-12 form-group login-input'>
                                <label>Username:</label>
                                <input type='text' className='form-control' placeholder='Enter your username' />
                            </div>
                            <div className='col-12 form-group login-input'>
                                <label>Password:</label>
                                <input type='password' className='form-control' placeholder='Enter your password' />
                            </div>
                            <div className='col-12'>
                                <button className='btn-login'>LOGIN</button>
                            </div>
                            <div className='col-12'>
                                <span className='forgot-password'>Forgot your password?</span>
                            </div>
                            <div className='col-12 text-center mt-5'>
                                <span className=''>Or login with:</span>
                            </div>
                            <div className='col-12 login-social'>
                                <i className="fab fa-google login-google"></i>
                                <i className="fab fa-facebook-f login-facebook"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment  >
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);