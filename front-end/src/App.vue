<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous"
    />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <title>Belmont Homies</title>
    <div class="page-container">
      <div class="header">
        <h1 class="site-title">
          <router-link to="/">Us at the Belmont</router-link>
        </h1>

        <nav class="navbar navbar-expand-lg navbar-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link to="/">Home</router-link>
              <router-link to="/homies">Homies</router-link>
              <router-link to="/pro-con">Pros and Cons</router-link>
              <!-- <router-link to="/faves">Faves</router-link> -->
              <router-link to="/quotes">Quotes</router-link>
              <router-link to="/contact">Contact</router-link>
            </div>
          </div>
        </nav>
      </div>
      <router-view />
      <div class="footer">
        <p>Created by Emma Harrington</p>
        <a href="https://github.com/emma-christine/creativeProject1">Github Repo</a>
      </div>
    </div>
  </div>
</template>



<style>
* {
  box-sizing: border-box;
  font-family: sans-serif;
}

@media all and (max-width: 800px) {
  .carde li {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.75rem;
  }

  .carde h2 {
    font-weight: 500;
  }

  .nav-item {
    font-size: 1.25em !important;
    color: white !important;
  }
}

.site-title {
  text-align: center;
  color: #31898f;
  font-size: 40px !important;
  margin-top: 1rem;
  font-weight: 550;
}

.site-title a {
  padding-top: 10px;
  color: #31898f;
  text-decoration: none;
}

.site-title a:hover {
  color: #31898f !important;
}

.header {
  margin-bottom: 45px;
}

.content h1 {
  margin: 15px 0;
  font-weight: 600;
  font-size: 2em;
}

.content h2 {
  font-size: 1.5em;
  margin: 15px 0;
}

.navbar {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2em auto;
  background-color: #31898f;
  box-shadow: 0 2px 8px #95c2b3;
}

.navbar a {
  color: white;
  font-weight: 500;
  text-decoration: none;
  display: block;
  text-align: center;
  padding: 14px 16px;
}

.squadpic {
  width: 350px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.lists-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 35px;
}

h1,
h2,
p {
  text-align: center;
}

.cards-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.carde {
  width: 300px;
  padding: 15px;
  margin: 20px;
  background-color: #c27ca7;
  line-height: 25px;
  border-radius: 5px;
  text-align: left;
  box-shadow: 0 0 10px #95c2b3;
}

.carde ul {
  text-align: left;
}

.pro,
.con {
  background-color: #7cbec2;
}

.one {
  background-color: #f76579;
}

.two {
  background-color: #31898f;
}

.three {
  background-color: #7cbec2;
}

.four {
  background-color: #b5f5d5;
}

.five {
  background-color: #c27ca7;
}

.six {
  background-color: #f76579;
}

.page-container {
  position: absolute;
  min-height: 100vh;
  top: 0;
  width: 100%;
  background-color: #e6fff7;
  text-align: center;
  padding-bottom: 60px; /* Footer height */
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7cbec2;
  padding: 10px 20px;
  font-size: 0.75em;
  width: 100%;
  height: 45px;
  position: absolute;
  bottom: 0;
}

.footer p {
  margin-bottom: 0;
}

.footer a {
  text-decoration: none;
  color: black;
}

.footer a:hover {
  color: white;
}

button {
  border: none;
  background-color: #c27ca7;
  padding: 8px 15px;
  border-radius: 25px;
  margin: 15px;
  color: white;
  box-shadow: 1px 1px 5px #a3b4af;
}

button:hover {
  background-color: #b4719b;
}

input {
  border-radius: 5px;
  border-width: 1px;
}

.contact p {
  margin: 1rem 0;
}

.contact #result {
  color: #31898f;
}

#app p {
  text-align: center;
  display: inline-block;
}

#app .carde {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

a:hover {
  text-decoration: none !important;
  color: #a6d4d6 !important;
}


</style>
