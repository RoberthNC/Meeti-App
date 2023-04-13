import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{
    res.render("home");
});

router.get("/crear-cuenta", (req,res)=>{
    res.render("crear-cuenta");
});

export default router;