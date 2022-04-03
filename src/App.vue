<template>
  <nav>
    <router-link to='/'>Menú</router-link> |
    <router-link to="/pastelero">Inventario</router-link> 
  </nav>
  <router-view/>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #9D5977;
  background-color: #F5ECE1;
  box-sizing: border-box;
  margin: 0px;
  padding: 0%;
  width: 100%;
  min-width: 735px;
}

nav {
  padding: 30px;
}

nav a {
  font-size: x-large;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #9D5977;
}

img {
  max-width: 500px;
  width: 75%;
  height: auto;
}

table {
  min-width: 721px;
  width: 75%;
  height: auto;
}

button {
  font-weight: 800;
  border: 2px solid #DC5A78;
  background-color: #FCFBC7;
  color: #DC5A78;
  padding: 0.5em 1em;
  border-radius: 1em;
}

button:hover {
  border: 2px solid #F5ECE1;
  background-color: #DC5A78;
  color: #F5ECE1;;
}

</style>
