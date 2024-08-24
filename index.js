const express =require("express")
const app =express()
const porta =40001
const db=require("./src/database/db")
const route=require("./src/routes/produto.routes")
app.use(express.json())
app.post("/",route)
// app.get("/",(req,res)=>{
//     res.send({messge:"ok"})
// })
app.listen(porta, async()=>{
    console.log("ligado na porta",porta);

    try{
      await db.authenticate()
      console.log("conexao estabelizada");
    }catch(err){
        console.log("erro ao conectar o banco de dados",err);
    }
    try{
        await db.sync({force:true})
        console.log("banco de dado sincronizado");
      }catch(err){
          console.log("erro ao sincronizar",err);
      }
      
    
    
})