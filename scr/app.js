const express = require("express")
const app = express()
const router = require("./routes/musicRoute")

app.use("/", router)

module.exports = app