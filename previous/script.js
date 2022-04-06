var app = new Vue({
    el: '#app',
    data: {
        quotes: [{
            text: "\"The only boy that talks to me is the Holy Ghost\"",
            author: ""
        }, {
            text: "\"Your dog isn't cuter than mine because my dog doesn't exist and yours shouldn't either\"",
            author: ""
        }, {
            text: "\"I don't think I could ever vibe with someone that hot, it would be weird.\"",
            author: ""
        }, {
            text: "\"You don't sing in the shower? Are you just depressed all the time??\"",
            author: ""
        }, {
            text: "\"I shouldn't show you my friends. One of them was an underwear model IN PERU\"",
            author: "- Aaron"
        }, {
            text: "\"Are you just sitting there with your pants open like some shady man?\"",
            author: ""
        }, {
            text: "\"I won't sleep when I'm dead. I'll be in the spirit world and it's going to suck!\"",
            author: ""
        }, {
            text: "\"I'm a freaking missionary, do you think I have time to get laid??\"",
            author: ""
        }, {
            text: "\"That is not even true. Go flush yourself down the freaking toilet\"",
            author: ""
        }, {
            text: "\"You kissed him with your eyes OPEN? And you thought this was going to work out??\"",
            author: ""
        }, {
            text: "\"One time I got really deep into corset youtube\"",
            author: ""
        }, {
            text: "\"I went on a date with a blind guy and even HE opened like 6 doors for me\"",
            author: ""
        }, {
            text: "\"There's no way in heaven or hell that I'm sharing that\"",
            author: ""
        }, {
            text: "\"You are just ruining my nugget experience\"",
            author: ""
        },],
        newQuote: '',
        newQuoter: '',
        colors: [{
            class: "one"
        }, {
            class: "two"
        }, {
            class: "three"
        }, {
            class: "four"
        }, {
            class: "five"
        },],
        place: 0,
    },
    methods: {
        addItem() {
            if (this.newQuote != '') {
                this.quotes.push({
                    text: '"' + this.newQuote + '"',
                    author: "- " + this.newQuoter
                });
            }
            this.newQuote = '';
            this.newQuoter = '';
        },
        getNextColor() {
            color = colors[place];
            place = place + 1;
            if (place == 5) {
                place = 0;
            }
            return color;
        }
    },
});


function validateEmail() {
    console.log("lel");
    let email = document.getElementById("email").value;
    let resultSpot = document.getElementById("result");
    console.log(email);
    if (email == "") {
        resultSpot.innerHTML = "you have to enter an email";
        return false;
    }
    else {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://api.eva.pingutil.com/email?email=${email}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                let myResult = JSON.parse(result);
                console.log(myResult);
                console.log(myResult.status);
                if (myResult.status == "success") {
                    resultSpot.innerHTML = "valid email";
                }
                else {
                    resultSpot.innerHTML = "not a valid email";
                }
            })
            .catch(error => {
                console.log('error', error)
            });
    }
}