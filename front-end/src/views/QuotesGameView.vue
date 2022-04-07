<template>
  <div class="quotesGame">
    <div class="intro" v-if="preGame">
      <h1>Quote Game</h1>
      <p>Guess who said the quote.</p>
      <br />
      <button @click="startGame">Ready!</button>
    </div>

    <div class="game" v-if="gameOn">
      <h2>Guess who said:</h2>
      <div class="cards-container">
        <div class="carde">
          <p>{{ currentQuote.text }}</p>
        </div>
      </div>

      <br />

      <div class="people">
        <button id="Hannah">Hannah</button>
        <button id="Emma L">Emma L</button>
        <button id="Emma H">Emma H</button>
        <button id="Caroline">Caroline</button>
        <button id="Savanna">Savanna</button>
        <button id="Aaron">Aaron</button>
      </div>

      <p class="bottomText" v-if="lost">It was {{ currentQuote.author }}</p>
      <br />

      <button class="nextButton" @click="nextQuote">Next</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "QuotesGameView",
  data() {
    return {
      quotes: [],
      //shuffledQuotes: [], //???
      currentIndex: 0,
      guessesMade: 0,
      lost: false,
      preGame: true,
      gameOn: false,
    };
  },
  created: function () {
    this.getQuotes();
  },
  computed: {
    currentQuote: this.quotes[this.currentIndex],
  },
  methods: {
    async getQuotes() {
      try {
        const response = await axios.get("/api/quotes");
        this.quotes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    // shuffleQuotes() {
    //   this.getQuotes();
    // },
    startGame() {
      this.preGame = false;
      this.gameOn = true;

      this.currentQuote = this.quotes[0];
    },
    makeGuess(name) {
      let author = this.currentQuote.author;
      if (this.guessesMade == 3) {
        this.lost = true;
      } 
      else {
        if (name == author) {
          alert("yes");
          //document.getElementById(author).className = "correct";
        } else {
          this.guessesMade++;
          alert("no")
          //document.getElementById(author).className = "wrong";
        }
      }
    },
    nextQuote() {
      this.currentIndex++;
      this.guessesMade = 0;
      this.lost = false;
    },
  },
};
</script>

<style scoped>
.carde {
  background-color: #b5f5d5;
}

button {
  margin: 5px;
}

.nextButton {
  background-color: #f76579;
}

.correct {
  background-color: rgb(50, 214, 50);
}

.wrong {
  background-color: rgb(50, 214, 50);
}
</style>