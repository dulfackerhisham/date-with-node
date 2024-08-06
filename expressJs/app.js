const express = require('express');
const path = require("path")
const fs = require("fs")
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/register.html")
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html")
})

app.post("/register", (req, res) => {
    const firstname = req.body.firstname
    const lasttname = req.body.lasttname
    const username = req.body.username
    const password = req.body.password
    const users = JSON.parse(fs.readFileSync("./users.json"))
    const user = users.find((user) => user.username === username)
    if(user) {
        res.send("user already exists")
        return;
    };
    users.push({id: Math.floor(Math.random() * 900000), username: username, password: password});

    fs.writeFileSync('/users.json', JSON.stringify(users));
    res.redirect("/login");
})



app.listen(4000, () => {
    console.log("Server is running on port 4000");
})