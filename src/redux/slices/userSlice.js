let initialState = [
    {
        id: 1,
        name: "Kirill",
        role: "user"
    },
    {
        id: 2,
        name: "profi",
        role: "specialist"
    },
    {
        id: 3,
        name: "admin",
        role: "admin"
    }
]

export default function jobsReducer(state = initialState, action) {
    switch (action.type) {
        case 'users/addUser': {
            return {
                ...state,
                users: [...users, action.payload]
            }
        }
        case 'users/removeUser': {
            return {
                ...state,
                users: state.users.filter((item) => item.id !== action.payload)
            }
        }
        default:
            return state
    }
}