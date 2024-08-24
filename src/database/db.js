const sequelize =require("sequelize")


const db= new sequelize("prat1","root","Severina1995",{
    host:"127.0.0.1",
    dialect:"mysql",
    port:"3307"
    

})

module.exports=db