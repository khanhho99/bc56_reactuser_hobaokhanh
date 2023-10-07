import axios from "axios"
import { updateUserList } from "../actionCreator/user"

export const getUserList = () => {
    return (dispatch) => {
        axios({
            url: 'https://64c62b58c853c26efadb28cd.mockapi.io/users',
            method: 'GET'
        })
            .then(res => {
                console.log(res)
                dispatch(updateUserList(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}



