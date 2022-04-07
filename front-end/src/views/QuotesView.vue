<template>
  <div class="quotes">
    <h1>Quotes</h1>
    <p>from us and our friends</p>

    <div id="app">
      <div>
        <!-- <div class="cards-container">
          <div
            class="carde four"
            v-for="item in quotes"
            draggable="true"
            v-on:dragstart="dragItem(item)"
            v-on:dragover.prevent
            v-on:drop="dropItem(item)"
            v-bind:class="getNextColor"
          >
            <p>{{ item.text }}</p>
            <p>
              <em>{{ item.author }}</em>
            </p>
          </div>
        </div> -->
      </div>

      <br />
      <form v-on:submit.prevent="addItem">
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
          placeholder="who said it (optional)"
        />
        <br />
        <button type="submit">Add Quote</button>
      </form>
    </div>
  </div>
</template>


