const express = require('express')
const app = express()

require("dotenv").config()
const connectDB = require("./config/dbConnect.js")
const port = process.env.PORT;
const userRouter = require("./routes/home.js")
const postRouter = require("./routes/post.js")



connectDB();

app.use(express.json())

// app.use("/", pingRouter)
app.use("/", userRouter)
app.use("/", postRouter)


const port = 3000

app.get('/ping', (req, res) => {
  res.send('pong')
})


app.listen(port, () => {
  console.log(`App is runnig on port ${port}`)
})