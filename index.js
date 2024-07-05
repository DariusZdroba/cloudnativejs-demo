const express = require('express');

const health = require('@cloudnative/health-connect');
let healthcheck = new health.HealthChecker();

const app = express();

const basicRouter = require('./routes/basicRoutes');

app.get('/', (req,res) => {
    return res.send("<h2>Express demo -docker-link-test- </h2>");
})
app.use('/live', health.LivenessEndpoint(healthcheck))
app.use('/ready', health.ReadinessEndpoint(healthcheck))
app.use('/health', health.HealthEndpoint(healthcheck))
app.use(basicRouter)

app.listen(3000, () => {
    console.log("listening on port 3000");
})
