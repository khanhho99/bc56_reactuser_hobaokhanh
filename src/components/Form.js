import axios from 'axios'
import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../redux/actions/user'
import { editUser } from '../redux/actionCreator/user'

class Form extends Component {

    inputRef = createRef();
    formRef = createRef();


    handleChangeForm = (e) => {
        let curUser = { ...this.props.editUser, [e.target.name]: e.target.value }
        this.props.handleUpdateUser(curUser)
    }

    handleSubmit = () => {
        axios({
            url: `https://64c62b58c853c26efadb28cd.mockapi.io/users`,
            method: 'POST',
            data: this.props.editUser
        })
            .then(res => {
                console.log(res)
                this.formRef.current.reset();
                this.props.handleUpdateUserList();
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleSaveEdit = (newUser, idUser) => {
        axios({
            url: `https://64c62b58c853c26efadb28cd.mockapi.io/users/${idUser}`,
            method: 'PUT',
            data: newUser
        })
            .then(res => {
                console.log(res)
                this.props.handleUpdateUserList();
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <form ref={this.formRef} action="">
                    <input onChange={this.handleChangeForm} type="text" name='ID' placeholder='ID' value={this.props.editUser.id} disabled />
                    <input onChange={this.handleChangeForm} type="text" name='Account' placeholder='Account' value={this.props.editUser.account} />
                    <input onChange={this.handleChangeForm} type="text" name='Password' placeholder='Password' value={this.props.editUser.password} />
                    <input onChange={this.handleChangeForm} type="text" name='Name' placeholder='Name' value={this.props.editUser.name} />
                    <button type='button' onClick={() => { this.handleSubmit() }}>Add</button>
                    <button type='button' onClick={() => { this.handleSaveEdit(this.props.editUser, this.props.editUser.id) }}>Edit</button>
                </form>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        editUser: state.userReducer.editUser,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleUpdateUserList: () => {
            dispatch(getUserList());
        },
        handleUpdateUser: (newUser) => {
            dispatch(editUser(newUser));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)