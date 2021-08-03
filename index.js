const express = require("express");
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// You can change the default route to simulate basepath deployments
// Remember set this up in react router too!
app.use('/', serveStatic('build'));

// You can change the default route to simulate basepath deployments
app.get('/*', (res,req)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'), err=>{
        if(err){
            res.statusCode(500).send(err);
        }
    });
});

// start express server on port 5000
app.listen(5000, ()=>{
    console.log("Server started on port 5000");
})