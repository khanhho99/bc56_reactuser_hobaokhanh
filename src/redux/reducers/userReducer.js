const initialState = {
    users: [],
    editUser: {}
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'UPDATE_USER': {
            return {
                ...state,
                users: payload
            }
        }
        case 'EDIT_USER': {
            return {
                ...state,
                editUser: payload
            }
        }
        default:
            return state
    }
}

export default userReducer;