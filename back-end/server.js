const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const data = require('./quotesData');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

// connect to the database
mongoose.connect('mongodb+srv://Emma89:8989456@cluster0.ihlpo.mongodb.net/belmont', {
    useNewUrlParser: true
});

//Quote
const quoteSchema = new mongoose.Schema({
    text: String,
    author: String,
});

quoteSchema.virtual('id')
    .get(function () {
        return this._id.toHexString();
    });

quoteSchema.set('toJSON', {
    virtuals: true
});

const Quote = mongoose.model('Quote', quoteSchema);


//Email
const emailSchema = new mongoose.Schema({
    name: String,
    email: String,
});

emailSchema.virtual('id')
    .get(function () {
        return this._id.toHexString();
    });

emailSchema.set('toJSON', {
    virtuals: true
});

const Email = mongoose.model('Email', emailSchema);


//Quotes
app.post('/api/quotes/file', async (req, res) => {
    try {
        await Quote.insertMany(data);
        console.log("Data inserted");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/api/quotes', async (req, res) => {
    const quote = new Quote({
        text: req.body.text,
        author: req.body.author
    });
    try {
        await quote.save();
        res.send(quote);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


app.get('/api/quotes', async (req, res) => {
    try {
        let quotes = await Quote.find();
        res.send(quotes);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/api/quotes/:id', async (req, res) => {
    try {
        await Quote.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


//Emails
app.post('/api/emails', async (req, res) => {
    const email = new Email({
        name: req.body.name,
        email: req.body.email
    });
    try {
        await email.save();
        res.send(email);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


app.get('/api/emails', async (req, res) => {
    try {
        let emails = await Email.find();
        res.send(emails);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/api/emails/:id', async (req, res) => {
    try {
        await Email.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));