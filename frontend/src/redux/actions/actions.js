import { GET_USERS, 
         GET_STUDENTS,
         POST_STUDENT,
         GET_STUDENT_BY_ID
        } from "../actions-types/actions-types";
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

export const getStudents = ()=>{
    return async function(dispatch){
        let response = await axios.get('http://localhost:3001/student')
        return(dispatch({
            type:GET_STUDENTS,
            payload: response.data
        }))
    }
}

export const postStudent = (payload) => {
    return async function (dispatch){
        let response  = await axios.post('http://localhost:3001/student', payload)
        return (dispatch({type: POST_STUDENT, payload: response.data}))
    }
}

export const getStudentById = (id)=>{
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/student/${id}`);
        return(dispatch({
            type: GET_STUDENT_BY_ID,
            payload: response.data
        }))
    }
}

