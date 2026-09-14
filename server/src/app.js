import express from "express"
import phishloginRouter from "./controllers/phishlogin.controller.js"



const app = express()



app.use(express.json())



app.use("/", phishloginRouter)



export default app