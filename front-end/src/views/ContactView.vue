<template>
  <div class="contact">
    <h1>Contact Us</h1>

    <p>enter your name and email address to recieve promotional emails</p>
    <br />
    <p>Name</p>
    <input type="text" v-model="name" id="game" name="game" />
    <br />
    <p>Email</p>
    <input type="text" v-model="email" id="email" name="email" />
    <br />
    <p id="result"></p>
    <br />
    <button type="button" @click="validateEmail">Submit</button>

    <br />
    <button type="button" class="smallButton" @click="showTheEmails">
      Show Emails
    </button>

    <div v-if="showEmails">
      <h2>Emails:</h2>
      <div v-for="email in emails" v-bind:key="email.id">
        <p>{{ email.name }}, {{ email.email }}</p>
        <button @click="deleteEmail(email)" class="delete">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ContactView",
  data() {
    return {
      emails: [],
      name: "",
      email: "",
      showEmails: false,
    };
  },
  created: function () {
    this.getEmails();
  },
  methods: {
    showTheEmails() {
        this.showEmails = !this.showEmails;
        this.getEmails();
    },
    async getEmails() {
      console.log("getting emails");
      try {
        const response = await axios.get("/api/emails");
        this.emails = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addEmail() {
      console.log("adding email");
      try {
        await axios.post("/api/emails", {
          name: this.name,
          email: this.email,
        });
        this.name = "";
        this.email = "";
        console.log("email added, I think");
        this.getEmails();
      } catch (error) {
        console.log(error);
      }
    },
    validateEmail() {
      console.log("lel");
      let email = document.getElementById("email").value;
      let resultSpot = document.getElementById("result");
      console.log(email);
      if (email == "") {
        resultSpot.innerHTML = "you have to enter an email";
        return false;
      } else {
        let requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(
          `https://api.eva.pingutil.com/email?email=${email}`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            let myResult = JSON.parse(result);
            console.log(myResult);
            console.log(myResult.status);
            if (myResult.status == "success") {
              resultSpot.innerHTML = "valid email. added to list.";
              this.addEmail();
            } else {
              resultSpot.innerHTML = "not a valid email";
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    },
    async deleteEmail(item) {
      try {
        await axios.delete("/api/emails/" + item.id);
        this.getEmails();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>


<style scoped>
button {
  margin: 5px;
}

input {
  margin: 5px;
}

.smallButton {
    background-color: transparent;
    color: #bdffea;
}

.delete {
    color: #f8fffc;
    background-color: transparent;
    padding: 0 5px;
    margin: -8px 0;
    font-size: .75em;
}
</style>