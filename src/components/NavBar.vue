<template>
  <div>
    <div id="container">
      <div id="mainpage">
        <router-link to="/" class="navbar-brand">Main Page</router-link>
      </div>
      <div id="otherpages">
        <router-link to="/login" class="navbar-brand login" v-if="!isUserAuthenticated"
          >Login</router-link
        >
        <router-link to="/register" class="navbar-brand register" v-if="!isUserAuthenticated">Register</router-link>
        <button v-if="isUserAuthenticated" @click="onLogout" type="button" class="btn btn-alert btn-sm">Log out</button>
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
