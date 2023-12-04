import { GET_STUDENTS, 
         GET_USERS, 
         POST_STUDENT, 
         GET_STUDENT_BY_ID } from "../actions-types/actions-types";

const initialState = {
    students: [],
    users:[],
    studentById:{}
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
        case GET_STUDENT_BY_ID:
            return{
                ...state,
                studentById: action.payload
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