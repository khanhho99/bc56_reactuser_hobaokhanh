import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../redux/actions/user'
import axios from 'axios';
import { editUser } from '../redux/actionCreator/user';

class UserList extends Component {

    componentDidMount() {
        this.props.handleUpdateUserList();
    }

    handleDelete = (idUser) => {
        axios({
            url: `https://64c62b58c853c26efadb28cd.mockapi.io/users/${idUser}`,
            method: 'DELETE'
        })
            .then(res => {
                this.props.handleUpdateUserList();
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleEdit = (idUser) => {
        axios({
            url: `https://64c62b58c853c26efadb28cd.mockapi.io/users/${idUser}`,
            method: 'GET'
        })
            .then(res => {
                this.props.handleEditUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    renderingUI = () => {
        return this.props.users.reverse().map((user, index) => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.account}</td>
                    <td>{user.password}</td>
                    <td>
                        <button onClick={() => { this.handleDelete(user.id) }} className='btn btn-danger mx-3'>Delete</button>
                        <button onClick={() => { this.handleEdit(user.id) }} className='btn btn-primary'>Edit</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Account</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderingUI()}
                    </tbody>
                </table>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.userReducer.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleUpdateUserList: () => {
            dispatch(getUserList());
        },
        handleEditUser: (user) => {
            dispatch(editUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)

