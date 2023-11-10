const {DataTypes} = require("sequelize")


const StudentModel = (database)=>{
    database.define("Student",{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey :true
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull: false 
        },
        gender:{
            type:DataTypes.ENUM('male','female'),
            allowNull: false
        },
        age:{
            type:DataTypes.STRING,
            allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps:false});
}

module.exports = StudentModel;