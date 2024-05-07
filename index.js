const express = require('express');
const app = express();

const db = require("./models");
const { Company } = db;

app.put('/company/insert/:cid').then();



db.sequelize.sync().then(req => {
    app.listen(5000, () => {
        console.log("server running now");
    });
});
