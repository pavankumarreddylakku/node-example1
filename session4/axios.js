const axios = require('axios');
let url = "https://jsonplaceholder.typicode.com/posts";
axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    console.log(res,'dada');
})