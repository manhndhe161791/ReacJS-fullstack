import React, { Component } from 'react';
//import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./UserManage.scss"
import { getAllUserService, createUserService, deleteUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            isOpenModalUser: false
        }
    }

    async componentDidMount() {
        await this.getAllUser();
    }

    getAllUser = async () => {
        let response = await getAllUserService('all');
        if (response && response.errorCode === 0) {
            this.setState({
                userList: response.user,
            })
        }
    }

    handleNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createUserService(data);
            if (response && response.errorCode !== 0) {
                alert(response.message);
            }
            else {
                await this.getAllUser();
                this.toggleUserModal();
                emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' });
            }
        } catch (e) {
            console.log(e)
        }

    }

    handleDeleteUser = async (user) => {
        console.log('click delete', user);
        try {
            let response = await deleteUserService(user.id);
            if (response && response.errorCode === 0) {
                await this.getAllUser();
            }
            else {
                alert(response.message);
            }
        } catch (e) {
            console.log(e);
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
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleUserModal={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                <div className='title text-center'>Manage user with React</div>
                <div className='mx-1'>
                    <button className='btn btn-primary px-2' onClick={() => this.handleNewUser()}>
                        <i className="fas fa-plus-circle"></i> New User
                    </button>
                </div>
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
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
                                                <button className='btn-edit-user'>
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button className='btn-delete-user' onClick={() => this.handleDeleteUser(item)}>
                                                    <i className="fas fa-user-slash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
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
