const {Student} = require("../db")
const {Op} = require('sequelize')

const createStudent = async(firstName, lastName, gender, age, email)=>{
    const newStudent = await Student.create({firstName, lastName, gender, age, email})
    return  newStudent;
}

const getStudents = async ()=>{
    const Students = await Student.findAll(); //buscar todos los registros del modelo Student
    return Students;
}

const findStudent = async (lastName)=>{
    const result = await Student.findAll({

            where: {
                lastName: {[Op.iLike]: `%${lastName}%`}
        }
})
    return result;
}

const updateStudent = async (id, firstName, lastName, gender, age, email) =>{
    const findStudent = await Student.findByPk(id);
    const studentUpdate = await findStudent.update({firstName, lastName, gender, age, email});
    return studentUpdate;
}


module.exports = {
    createStudent,
    getStudents,
    findStudent,
    updateStudent
}