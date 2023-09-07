const {Student} = require("../db")

const createStudent = async(firstName, lastName, gender, age, email)=>{
    const newStudent = await Student.create({firstName, lastName, gender, age, email})
    return  newStudent;
}

module.exports = {
    createStudent
}