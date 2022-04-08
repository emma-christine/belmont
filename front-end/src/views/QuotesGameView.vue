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

      <div class="answers">
        <div v-for="author in authors" v-bind:key="author.id">
          <button v-bind:class="author.color" @click="makeGuess(author.person)">
            {{ author.person }}
          </button>
        </div>
      </div>

      <br />
      <p class="bottomText" v-if="done">It was {{ currentQuote.author }}!</p>
      <br />
      <button class="nextButton" @click="nextQuote">Next</button>
    </div>

    <div class="endGame" v-if="gameOver">
      <h2>Good Job!</h2>
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
      authors: [],
      //shuffledQuotes: [], //???
      currentIndex: 0,
      guessesMade: 0,
      done: false,
      preGame: true,
      gameOn: false,
      gameOver: false,
    };
  },
  created: function () {
    this.getQuotes();
  },
  computed: {
    currentQuote: function () {
      return this.quotes[this.currentIndex];
    },
  },
  methods: {
    async getQuotes() {
      try {
        const response = await axios.get("/api/quotes");
        this.quotes = response.data;
        this.getAuthors();
      } catch (error) {
        console.log(error);
      }
    },
    getAuthors() {
      console.log("getting authors");
      let id = 0;

      console.log("screeeeeeeam");
      for (const quote of this.quotes) {
        let inAuthorList = false;
        for (const author of this.authors) {
          if (author.person == quote.author) {
            inAuthorList = true;
          }
        }
        if (!inAuthorList) {
          console.log("not in list");
          this.authors.push({
            person: quote.author,
            color: "normal",
            id: id,
          });
          id++;
        }
      }
    },
    startGame() {
      this.preGame = false;
      this.gameOn = true;
    },
    makeGuess(name) {
      let author = this.currentQuote.author;

      if (!this.done) {
        if (name == author) {
          this.authors.find((o) => o.person === name).color = "correct";
          this.done = true;
        } else {
          this.guessesMade++;
          this.authors.find((o) => o.person === name).color = "wrong";
          if (this.guessesMade == 3) {
            this.done = true;
          }
        }
      }
    },
    nextQuote() {
      if (this.currentIndex == this.quotes.length-1) {
        this.gameOn = false;
        this.gameOver = true;
      } 
      else {
        this.currentIndex++;
        this.guessesMade = 0;
        this.done = false;
        for (const author of this.authors) {
          author.color = "normal";
        }
      }
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

.normal {
  background-color: #c27ca7;
}

.correct {
  background-color: rgb(50, 214, 50);
}

.wrong {
  background-color: rgb(209, 37, 37);
}

.answers {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.quotesGame {
  height: 80vh;
}
</style>