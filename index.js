import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true}))

let thePassword = "";

function correctPassword(req, res, next){
    console.log(req.body);
    thePassword = req.body.password; 
    if (thePassword === "ILoveProgramming"){
        console.log("Correct password")
    return next();
    }else{
        console.log("Incorrect Password");
    return res.status(401).send("<h1>Incorrect Password</h1>");
    }
}


app.listen(port, () => {
    console.log(`Your port: ${port} is running`)
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check", correctPassword, (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
})

//The password is ILoveProgramming
