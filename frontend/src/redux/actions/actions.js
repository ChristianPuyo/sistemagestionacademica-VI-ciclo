import { GET_USERS } from "../actions-types/actions-types";
import axios from "axios"

export const getUsers = ()=>{
    return async function(dispatch){
        let response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return(dispatch({
            type:GET_USERS,
            payload:response.data
        }))
    }
}