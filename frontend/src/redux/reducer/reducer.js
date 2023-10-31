import { GET_USERS } from "../actions-types/actions-types";

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
        default:
            return state
    }

}
export default reducer;