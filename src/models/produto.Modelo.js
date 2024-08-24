const {DataTypes}=require("sequelize")
const sequelize= require("../database/db")

const produtos=sequelize.define('produtos',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.INTEGER, // Corrigido para DataTypes.INTEGER
        allowNull: false
    }
})


module.exports=produtos