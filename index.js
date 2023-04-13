import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import dotenv from "dotenv";

dotenv.config();
const __dirname = path.resolve();

import router from "./routes/index.js";

const app = express();

//Habilitar ejs
app.use(expressEjsLayouts);
app.set("view engine","ejs");

//Habilitar las vistas
app.set("views",path.join(__dirname,"./views"));

//Archivos estáticos
app.use(express.static("public"));

//Middleware
app.use((req,res,next)=>{
    const fecha = new Date();
    res.locals.year = fecha.getFullYear();
    next();
});

//Routing
app.use("/", router);

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Aplicación corriendo en el puerto: ${PORT}`);
});