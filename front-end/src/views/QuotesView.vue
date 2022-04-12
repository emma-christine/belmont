<template>
  <div class="quotes">
    <h1>Quotes</h1>
    <p>from us and our friends</p>
    <br>
    <button><router-link to="/quotesGame">Play Quote Game</router-link></button>

    <div>
      <div class="cards-container">
        <div v-for="quote in quotes" v-bind:key="quote.id">
          <div class="carde">
            <p>"{{ quote.text }}"</p>
            <button @click="deleteQuote(quote)" class="delete">X</button>
          </div>
        </div>
      </div>

      <br />
      <form v-on:submit.prevent="addQuote">
        <textarea
          id="inputQuote"
          rows="4"
          cols="50"
          v-model="newQuote"
        ></textarea>
        <br />
        <input
          id="inputAuthor"
          v-model="newQuoter"
          placeholder="who said it"
        />
        <br />
        <button type="submit">Add Quote</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "QuotesView",
  data() {
    return {
      quotes: [],
      newQuote: "",
      newQuoter: "",
    };
  },
  created: function () {
    this.getQuotes();
  },
  computed: {},
  methods: {
    async getQuotes() {
      try {
        const response = await axios.get("/api/quotes");
        this.quotes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addQuote() {
      try {
        await axios.post("/api/quotes", {
          text: this.newQuote,
          author: this.newQuoter,
        });
        this.newQuote = "";
        this.newQuoter = "";
        this.getQuotes();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteQuote(item) {
      try {
        await axios.delete("/api/quotes/" + item.id);
        this.getQuotes();
      } catch (error) {
        console.log(error);
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
    margin: 10px;
}

button a {
    color: white;
}

button a:hover {
    text-decoration: none;
}

.delete {
    color: #f8fffc;
    background-color: transparent;
    padding: 0 5px;
    margin: -8px 0;
    font-size: .75em;
}
</style>