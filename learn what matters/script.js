const express = require('express');
const app = express();



app.use((req, res, next) => {
    console.log("hello this is from middleware");
    next();
});

app.use((req, res, next) => {
    console.log("hello this is from middleware 2");
    next();
});

app.get("/", (req, res) => {
    res.send("main page")
})

app.get("/home", (req, res) => {
    res.send("home page")
})

app.listen(3000, () => {
    console.log("Server listening at port 3000");
});