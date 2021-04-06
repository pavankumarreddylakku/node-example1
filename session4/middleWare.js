const express = require('express');
let app = express();
let path = require('path');
console.log(path.join(__dirname , 'public'));
app.use('/css', express.static(path.join(__dirname ,'public')));

/* app.use("/",(req, res,next) => {
    console.log('middle ware');
    next();
});     
app.use((req, res, next) => {
    console.log('middle ware');
    next();
}); both are same it work before get method work,"/" or without this both are same*/
/* app.use((req, res,next) => {
   console.log('middle ware');
   next();
}); */
app.get('/css', (req, res) => {
    res.render('style.css'); // not working
});
app.get('/',(req,res) => {
    console.log('hello');
    res.send(`<!DOCTYPE html>
        < html lag = "en" >
        < !-- < head >
        <meta charset="UTF-8">
        </head> -->
    <body>

        <!-- This is a comment -->
        <p>This is a paragraph.</p>
        <!-- Comments are not displayed in the browser -->

</body>
</html >`);
});
app.listen(9999);