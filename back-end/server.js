const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

let quotes = [{
    text: "The only boy that talks to me is the Holy Ghost",
    author: "Emma L"
}, {
    text: "Your dog isn't cuter than mine because my dog doesn't exist and yours shouldn't either",
    author: "Emma L"
}, {
    text: "I don't think I could ever vibe with someone that hot, it would be weird.",
    author: "Emma H"
}, {
    text: "You don't sing in the shower? Are you just depressed all the time??",
    author: "Hannah"
}, {
    text: "I shouldn't show you my friends. One of them was an underwear model IN PERU",
    author: "Aaron"
}, {
    text: "Are you just sitting there with your pants open like some shady man?",
    author: "Emma H"
}, {
    text: "I won't sleep when I'm dead. I'll be in the spirit world and it's going to suck!",
    author: "Hannah"
}, {
    text: "I'm a freaking missionary, do you think I have time to get laid??",
    author: "Emma L"
}, {
    text: "That is not even true. Go flush yourself down the freaking toilet",
    author: "Emma L"
}, {
    text: "You kissed him with your eyes OPEN? And you thought this was going to work out??",
    author: "Caroline"
}, {
    text: "If I'm not wearing a Speedo I'm not living life",
    author: "Josh"
}, {
    text: "Don't kill her feelings, just maim them",
    author: "Aaron"
}, {
    text: "One time I got really deep into corset youtube",
    author: "Emma H"
}, {
    text: "I went on a date with a blind guy and even HE opened like 6 doors for me",
    author: "Caroline"
}, {
    text: "There's no way in heaven or hell that I'm sharing that",
    author: "Emma H"
}, {
    text: "You are just ruining my nugget experience",
    author: "Savanna"
},];
let id = 0;

app.post('/api/quotes', (req, res) => {
    id = id + 1;
    let item = {
      id: id,
      text: req.body.text,
      author: req.body.author
    };
    quotes.push(item);
    res.send(item);
});

app.get('/api/quotes', (req, res) => {
    res.send(quotes);
});

app.delete('/api/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let removeIndex = quotes.map(item => {
        return item.id;
    })
        .indexOf(id);
    if (removeIndex === -1) {
        res.status(404)
            .send("Sorry, that item doesn't exist");
        return;
    }
    quotes.splice(removeIndex, 1);
    res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));