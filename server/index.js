const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const carsRouter = require("./routes/game.routes")
const fileUpload = require("express-fileupload")
const app = express()
const PORT = config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')

app.use(fileUpload({}))
app.use(corsMiddleware)
app.use(express.static('uploads'));
app.use(express.json())
app.use("/games", carsRouter);
app.use("/api/auth", authRouter);

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"));
        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
