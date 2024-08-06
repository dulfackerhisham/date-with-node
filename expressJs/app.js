const express = require('express');
const path = require("path")
const app = express();

app.get("/", (req, res) => {
    res.send("good morning")
});

app.get("/dodge", (req, res) => res.send("dodge is a car"));

app.get("/main", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
    console.log(__dirname);
    console.log(__filename);
})