import express from "express"
import router from "./routes/users.js";
import cors from "cors"
const app  = express()

const port = 4000;
app.use(cors())
app.use(express.json())


app.use("/",router)

app.get("/", (req,res) => res.send('hello index'))

app.listen(port,()=>console.log(`app is running on http://localhost:${port}`))