import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./UserManage.scss"
import { getAllUser } from '../../services/userService';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }

    async componentDidMount() {
        let response = await getAllUser('all');
        if (response && response.errorCode === 0) {
            this.setState({
                userList: response.user,
            })
        }
    }

    /* LIFE CYCLE
        Run component
        1. Run constructor -> init state
        2. Did mount
        3. Render
    */
    render() {
        let userList = this.state.userList;
        return (
            <div className="user-container">
                <div className='title text-center'>Manage user with React</div>
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                        {
                            userList && userList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit-user'><i className="fas fa-edit"></i></button>
                                            <button className='btn-delete-user'><i className="fas fa-user-slash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
