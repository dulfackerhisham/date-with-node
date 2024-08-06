const express=require('express');
const app = express();

app.set("view engine", "ejs");

app.use((req, res, next) => {
    console.log("middleware test");
    next();
});

app.get("/", (req, res) => {
    res.send("hello world")
});

app.get("/test", (req, res) => {
    res.render("index", {date: 2024})
});

app.get("/profile/:username", (req, res) => {
    res.send(`this is from the user ${req.params.username}`)
})

app.listen(4000, () => {
    console.log("server running at port 4000");
})