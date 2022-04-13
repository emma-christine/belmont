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

let emails = []
let id2 = 0;

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

app.post('/api/emails', (req, res) => {
    id2 = id2 + 1;
    let item = {
        id: id2,
        name: req.body.name,
        email: req.body.email
    };
    emails.push(item);
    res.send(item);
});

app.get('/api/emails', (req, res) => {
    res.send(emails);
});

app.delete('/api/emails/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let removeIndex = emails.map(item => {
        return item.id;
    })
        .indexOf(id);
    if (removeIndex === -1) {
        res.status(404)
            .send("Sorry, that item doesn't exist");
        return;
    }
    emails.splice(removeIndex, 1);
    res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));