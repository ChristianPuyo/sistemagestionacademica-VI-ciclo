const { Router } = require("express");
const { createStudent, getStudents, findStudent } = require("../controllers/studentControllers");


const studentRouter = Router();

studentRouter.post("/", async(req, res)=>{
    const {firstName, lastName, gender, age, email} = req.body;
    try {
        const newStuden = await createStudent(firstName, lastName, gender, age, email)
        res.status(200).json(newStuden)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

studentRouter.get("/", async(req, res)=>{
    const {lastName} = req.query;
    let student;
    try {
        if(lastName){
            student= await findStudent(lastName);//Esto busca a un estudiante
        }else{
            student = await getStudents(); //Esto trae a todos
        }
        
        res.status(200).json(student)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = studentRouter;

