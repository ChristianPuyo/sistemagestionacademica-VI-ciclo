import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { postStudent } from "../../redux/actions/actions";

const FormUpdateStudent = ()=>{
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        firstName: "",
        lastName: "" ,
        gender: "",
        age: "",
        email:""
    })

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
                <button type="submit">Create Student</button> 
                
            </form>
        </div>
    )
}

export default FormUpdateStudent;