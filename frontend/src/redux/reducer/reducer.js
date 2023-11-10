import { GET_STUDENTS, GET_USERS, POST_STUDENT } from "../actions-types/actions-types";

const initialState = {
    students: [],
    users:[]
}

function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_USERS:
            return{
                ...state,
                users: action.payload

            }
        case GET_STUDENTS:
            return{
                ...state,
                students: action.payload
            }
        case POST_STUDENT:
            return{
                ...state
            }
        default:
            return state
    }

}
export default reducer;