const {Sequelize, DataTypes} = require("sequelize")
const StudentModel = require("./models/Student")

const database = new Sequelize(
    `postgres://postgres:admin@localhost:5432/gestionacademica`,
    {logging: false} 
);

StudentModel(database)

console.log(database.models)

module.exports = {database, ...database.models};