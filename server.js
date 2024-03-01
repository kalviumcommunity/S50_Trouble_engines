const express = require('express')
const app = express()
const cors = require('cors')
require("dotenv").config()
const connectDB = require("./config/dbConnect.js")
const port = process.env.PORT;
const userRouter = require("./routes/user.js")
const postRouter = require("./routes/post.js")



connectDB();

app.use(express.json())

app.use(cors())
app.use("/", userRouter)
app.use("/", postRouter)

app.get('/ping', (req, res) => {
  res.send('pong')
})


app.listen(port, () => {
  console.log(`App is runnig on port ${port}`)
})