const express = require("express")
const port = process.env.PORT || 3000
const server = express()


server.get("/", (req,res)=> {
    console.log("A request was made on homepage")
    res.status(200).send("Home page")
})

server.listen(port, (req, res) => {
    console.log("Server is up and running")
})