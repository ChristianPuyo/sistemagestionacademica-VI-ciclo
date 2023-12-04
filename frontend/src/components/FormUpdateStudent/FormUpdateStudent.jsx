import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { getStudentById, postStudent } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const FormUpdateStudent = ()=>{
    const studentById = useSelector(state => state.studentById)
    console.log("Este es el estudiante por ID:",studentById)
    const dispatch = useDispatch();
    let {id} = useParams();
    console.log("Esto es el ID:"+id)

    useEffect(()=>{
        dispatch(getStudentById(id))
    },[id])

    const [input, setInput] = useState({
        firstName: "",
        lastName: "" ,
        gender: "",
        age: "",
        email:""
    })

    useEffect(()=>{
        // studentById && setInput(studentById)
        if(studentById){
            setInput(studentById)
        }
    },[studentById])

    console.log("Firstname:",input.firstName)
    console.log("Lastname:",input.lastName)
    console.log("Gender:", input.gender)
    console.log("Age:", input.age)
    console.log("Email:", input.email)
    
    const handleInputChange = (e)=>{
            setInput({
               ...input,
               [e.target.name] : e.target.value

            })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(postStudent(input))
        alert("Student created")

    }

    return(
        <div>
            <h1>Formulario para actualizar estudiante</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={input.firstName}
                name='firstName' 
                placeholder='Firstname'
                onChange={handleInputChange}
                />

                <input
                type="text"
                value={input.lastName}
                name='lastName' 
                placeholder='Lastname'
                onChange={handleInputChange}
                />
                
                <input
                type="text"
                value={input.gender}
                name='gender' 
                placeholder='Gender'
                onChange={handleInputChange}
                />

                <input
                type="text"
                value={input.age}
                name='age' 
                placeholder='Age'
                onChange={handleInputChange}
                />

                <input
                type="text"
                value={input.email}
                name='email' 
                placeholder='Email'
                onChange={handleInputChange}
                />
                <button type="submit">Save Student</button> 
                
            </form>
        </div>
    )
}

export default FormUpdateStudent;