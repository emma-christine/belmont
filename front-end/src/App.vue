<template>
  <div id="app">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <title>Belmont Homies</title>
    <div class="header">
      <h1 class="site-title">Us at the Belmont</h1>

      <nav class="navbar navbar-expand-lg navbar-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
              <router-link to="/">Home</router-link>
              <router-link to="/homies">Homies</router-link>
              <router-link to="/pro-con">Pros and Cons</router-link>
              <router-link to="/faves">Faves</router-link>
              <router-link to="/quotes">Quotes</router-link>
              <router-link to="/contact">Contact</router-link>
              </div>
          </div>
      </nav>
    </div>
    <router-view/>
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
	color: #31898F;
	font-size: 40px !important;
	margin-top: 1rem;
	font-weight: 550;
}

.site-title a {
	padding-top: 10px;
	color: #31898F;
    text-decoration: none;
}

.header {
	margin-bottom: 45px;
}

body {
	background-color: #e6fff7;
	text-align: center;
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
	background-color: #31898F;
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

h1, h2, p {
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
    background-color: #C27CA7;
    line-height: 25px;
    border-radius: 5px;
	text-align: left;
}

.pro, .con {
	background-color: #7CBEC2;

}

.one {
	background-color: #F76579;
}

.two {
	background-color: #31898F;
}

.three {
        background-color: #7CBEC2;
}

.four {
        background-color: #B5F5D5;
}

.five {
        background-color: #C27CA7;
}

.six {
        background-color: #F76579;
}

.page-container {
	position: absolute;
    min-height: 100vh;
    top: 0;
    width: 100%;
}
  
.content {
	padding-bottom: 60px;    /* Footer height */
}

.footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #7CBEC2;
	padding: 10px 20px;
	font-size: .75em;
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
    background-color: #C27CA7;
	padding: 8px 15px;
	border-radius: 25px;
	margin: 15px;
	color: white;
}

input {
	border-radius: 5px;
    border-width: 1px;
}

.contact p {
	margin: 1rem 0;
}

.contact #result {
	color: #31898F;
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
</style>
