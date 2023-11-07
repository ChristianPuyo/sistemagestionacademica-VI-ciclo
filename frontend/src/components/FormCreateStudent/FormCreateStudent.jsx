import React from "react";
import { useState } from "react";

const FormCreateStudent = ()=>{

    const [input, setInput] = useState({
        firstName: "",
        lastName: "" ,
        gender: "",
        age: "",
        email:""
    })

    console.log("Firstname:",input.firstName)
    console.log("Lastname:",input.lastName)

    const handleInputChange = (e)=>{
            setInput({
               ...input,
               [e.target.name] : e.target.value

            })
    }

    const handleSubmit = ()=>{
        alert("Hello")
    }

    return(
        <div>
            <h1>Formulario de Creación de Estudiante</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={input.firstName}
                name='firstName' 
                placeholder='Firstname'
                onChange={handleInputChange}
                />
                
            </form>
        </div>
    )
}

export default FormCreateStudent;