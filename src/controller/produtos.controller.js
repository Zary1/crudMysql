const produtosServices= require("../services/produtos.services")


const produtos = async(req,res)=>{
      const {name,preco}=req.body
      if(!name || !preco){
        console.log("campo vazio");
      }

        try{
             const produit = await produtosServices(req.body)
              if(!produit){
                res.status(400).send({message:"erro ao criar utente"})
              }
            res.status(201).send({
                name,
                preco
            })
        }catch(err){
            console.log("erro ao inserir",err);
        }


}

module.exports={produtos}