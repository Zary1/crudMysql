const express=require("express")
const router=express.Router()
const produtoController= require("../controller/produtos.controller")

router.post("/",produtoController.produtos)

module.exports=router
