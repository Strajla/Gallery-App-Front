<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar' 
export default{
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

#app {
  font-family: 'Anton', sans-serif;
  text-align: center;
  color: #2c3e50;
}

#container {
  display: flex;
  justify-content: space-between;
}

#nav a {
  font-weight: bold;
  color: rgb(75, 61, 134);
}

#nav a.router-link-exact-active {
  color: #826aef;
}
</style>
