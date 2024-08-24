const produtosModelos=require("../models/produto.Modelo")

const produit= async (body)=>{
    try{
        const user = await produtosModelos.create(body)
        return  user
    }catch(err){
        console.log("erro ao criar",err);
    }
 
}

module.exports=produit