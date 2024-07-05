const express = require('express');

const app = express();

const basicRouter = require('./routes/basicRoutes');

app.get('/', (req,res) => {
    return res.send("<h2>Express demo -docker-link-test- </h2>");
})

app.use(basicRouter)

app.listen(4141, () => {
    console.log("listening on port 4141");
})
