<template>
  <div>
    <div id="container">
      <div id="mainpage">
        <router-link to="/" class="navbar-brand">Main Page</router-link>
      </div>
      <div id="otherpages">
        <router-link to="/login" class="navbar-brand login"
          >Login</router-link
        >
        <router-link to="/register" class="navbar-brand register">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  components: {
      
  }
};
</script>

<style>
#otherpages {
  text-shadow: 1px 1px 1px red, 2px 2px 1px red;
  background: #eeeeee;
  letter-spacing: 1.4px;
  border-bottom: solid 1px #006600;
  text-transform: uppercase;
}

#mainpage {
  text-shadow: 1px 1px 1px darkred, 2px 2px 1px darkred;
  letter-spacing: 1.8px;
  border-bottom: solid 1px #d3f802;
  text-transform: uppercase;
}
</style>
