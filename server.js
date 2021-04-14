const express = require('express');
//path is apart of NODE
const path = require('path');
const fs = require("fs");
const apiRoutes = require("./router/apiroutes");
const htmlRoutes = require("./router/htmlroutes")
//initialize the express app
const app = express();
const PORT = process.env.PORT || 3006;

//data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.listen(PORT, function () {
    console.log("Listening on PORT http://localhost:" + PORT)
})