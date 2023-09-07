const { Router } = require("express");
const { createStudent } = require("../controllers/studentControllers");


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

