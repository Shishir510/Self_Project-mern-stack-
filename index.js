import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/employees.js"

// storing express module in app variable
const app = express();

// use to transfer data from client to server in form of JSON
// app.use(express.json());



// bodyParser.json : Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
// limit: Controls the maximum request body size
//bodyParser.urlencoded: Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body 
// extended true : This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
app.use(bodyParser.json({ limit: "20mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }))

//  here i didn't use app.use(cors()) because we need to enable cors preflight as  certain CORS requests are considered 'complex' and require an initial OPTIONS request (called the "pre-flight request") 
// refer to npm document for module cors
// app.use(cors());
app.options('*', cors())

//using express router for routing 
//  /employee is given to start the route after http://localhost:5000/employee  
app.use("/employee", router)

// !using .env file for securing the password and userName of developer. Lastly we add this file to .gitignore file to kept it private

const CONNECTION_URL = `mongodb+srv://<Username>:<Password>@cluster0.lvd2yvb.mongodb.net/db?retryWrites=true&w=majority`;

//accesing the port from .env file if code is publically shared
const PORT = process.env.PORT || 5000;

// no need to write useurlparser and all other options in current update as all are already added 
//using javascript promises 
mongoose.connect(CONNECTION_URL)
    .then(() =>
        app.listen(PORT, () => {
            console.log(`Connection is sucesssful at ${PORT} `)
        })
    ).catch((err) => {
        console.log(err.message)
    })

// we also connect mongoose using async/await methods 
