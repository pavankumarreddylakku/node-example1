const express = require("express");
let app = express();
app.get('/', (req, res) => {
    res.send(`<h1>hello</h1>${req.params.id}`);
});
app.get('/post/:id', (req, res) => {
    res.send(`<h1>post${req.params.id}</h1>`);
});
app.get('/post/:id/category/:categoryId', (req, res) => {
    res.send(`<h1>hello</h1>${req.params.categoryId}`);
});
/* app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
}); */
app.listen(9999);