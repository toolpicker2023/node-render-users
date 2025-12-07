const express = require("express")
const port = process.env.PORT || 3000
const server = express()
const fs = require("fs")
const { url } = require("inspector")
const os = require("os")
const path = require("path")


server.use(express.json())

server.use("/", express.static('files'))
server.use(express.urlencoded({extended:true}))

const users = [{"username":"user1", "email":"user1@email.com"}, {"username":"user2", "email":"user2@email.com"}]

const osType = os.type()

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<title>MY Server</title>
</head>
<body>
<h3>Your os type is ${osType}</h3>
</body>
</html>
`


// const USERS_FILE = path.join(__dirname, 'users.json');

// async function saveUsers(users) {
//     try {
//     const json = JSON.stringify(users, null, 2); // pretty print
//     await fs.writeFile(USERS_FILE, json, 'utf-8');
//     console.log("Users saved successfully.");
//   } catch (err) {
//     console.error("Error saving users:", err);
//   }
// }

// async function loadUsers() {
//   try {
//     const data = await fs.readFile(USERS_FILE, 'utf-8');
//     return JSON.parse(data);
//   } catch (err) {
//     if (err.code === "ENOENT") {
//       // File doesn't exist yet → return empty list
//       return [];
//     }
//     console.error("Error loading users:", err);
//     return [];
//   }
// }


function saveUsers() {
    fs.writeFile()
}



server.get("/users", (req, res)=> {
    console.log(users)
})

server.post("/user", (req, res) => {

    let data = req.body
    let username = data.username
    let email = data.email
    let user = {"username": username, "email": email}
    users.push(user)
    console.log("user created")
    res.status(200).send("user createdfront")
})

server.post("/userForm", (req, res)=> {
    let data = req.body

    console.log("Data", data)
    res.send("UserForm Page")
})


server.use("/test", (req, res)=> {
    console.log("Test Page")
    res.send("Test Page")
})

server.get("/", (req,res)=> {
    console.log("A request was made on homepage")
    fs.writeFile("./index.html", htmlContent, err => {
        if(err) {
            res.status(400).send("Problem in writing file")
        } else {
            fs.readFile("./index.html", "utf8", (err, content)=> {
                if (err) {
                    res.status(400).send(content)
                } 
                
                res.status(200).send(content)
            })
        }
    })
})

server.listen(port, () => {
    console.log("Server is up and running")
})


// server.listen(port)