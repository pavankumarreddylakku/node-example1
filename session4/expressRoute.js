const express = require('express');
let app = express();
let port = process.env.PORT || 9999;
console.log(process.env.PORT, process.env,'process.env.PORT');
app.get("/",(req,res) => {
    res.send(`<h1>Hello</h1>`);
});
app.get("/api", (req, res) => {
    res.send("<h1>api page</h1>");
});
app.listen(port);