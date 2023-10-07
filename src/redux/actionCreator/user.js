export const updateUserList = (users) => {
    return {
        type: 'UPDATE_USER',
        payload: users
    }
}

export const editUser = (user) => {
    return {
        type: 'EDIT_USER',
        payload: user
    }
}