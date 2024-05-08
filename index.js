const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require("./models");
const { Company } = db;

app.use(bodyParser.json());

// create an API that will send 2 website rows with fields- id, and email which are not sent previously(you can change the model for tracking)
app.get('/companies/unverified', async (req, res) => {
    const companies = await Company.findAll({
        where: {
            verified: false,
        },
        attributes: ['id', 'email'],
        limit: 2,
    });
    res.json(companies);
});

app.get('/companies', async (req, res) => {
    const companies = await Company.findAll();
    res.json(companies);
});

// create an API that will take an id and mark the corresponding company email is verified(you can change the model for this data)
app.get('/verify_company/:id', async (req, res) => {
    const id = req.params.id;
    const company = await Company.findByPk(id);
    company.verified = true;
    await company.save();
    return res.status(200).json({ message: 'Company email verified successfully' });
});


app.post('/new_company', async (req, res) => {
    const { name, country, website, email } = req.body;
    const newCompany = await Company.create({
        name,
        country,
        website,
        email,
        verified: false // Assuming the email is not verified initially
    });

    res.status(200).json(newCompany);
});

db.sequelize.sync().then(req => {
    app.listen(5000, () => {
        console.log("server running now");
    });
});
