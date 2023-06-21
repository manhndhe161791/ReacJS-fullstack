import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/allCodeService';
import { LANGUAGES } from '../../../utils/constant';
import * as actions from "../../../store/actions";

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArray: []
        };
    }

    async componentDidMount() {
        this.props.getGenderStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArray: this.props.genderRedux
            })
        }
    }

    render() {
        let genderList = this.state.genderArray;
        let language = this.props.language;
        return (
            <>
                <div className='user-redux-container'>
                    <div className='title'>
                        Manage User Redux
                    </div>
                    <div className="user-redux-body" >
                        <div style={{ width: "600px" }} className='container mt-5'>
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <FormattedMessage id="manager-user.add-new-user" />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">
                                        <FormattedMessage id="manager-user.first-name" />
                                    </label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">
                                        <FormattedMessage id="manager-user.last-name" />
                                    </label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">
                                        <FormattedMessage id="manager-user.email" />
                                    </label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">
                                        <FormattedMessage id="manager-user.password" />
                                    </label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">
                                        <FormattedMessage id="manager-user.phone" />
                                    </label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-8">
                                    <label className="form-label">
                                        <FormattedMessage id="manager-user.address" />
                                    </label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label"><FormattedMessage id="manager-user.position" /></label>
                                    <select className="form-select">
                                        <option defaultValue>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">
                                        <FormattedMessage id="manager-user.role" />
                                    </label>
                                    <select className="form-select">
                                        <option defaultValue>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">
                                        <FormattedMessage id="manager-user.gender" />
                                    </label>
                                    <select className="form-select">
                                        {genderList && genderList.length > 0 &&
                                            genderList.map((item, index) => {
                                                return (
                                                    <option key={index}>
                                                        {language === LANGUAGES.VI ? item.valueVI : item.valueEN}
                                                    </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">
                                        <FormattedMessage id="manager-user.role" />
                                    </label>
                                    <select className="form-select">
                                        <option defaultValue>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-12 mt-3">
                                    <button type="submit" className="btn btn-primary">
                                        <FormattedMessage id="manager-user.sign-up" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </>

        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart())
        //changeAppLanguageRedux: (language) => { dispatch(changeAppLanguage(language)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
