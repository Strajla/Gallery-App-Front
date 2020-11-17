<template>
  <div>
    <div id="container">
      <div id="mainpage">
        <router-link to="/" class="navbar-brand">Main Page</router-link>
      </div>
      <div id="yourgalleries">
        <router-link
          to="/your-galleries"
          class="navbar-brand"
          v-if="isUserAuthenticated"
          >Your Galleries</router-link
        >
      </div>
      <div id="create">
        <router-link
          to="/creating"
          class="navbar-brand"
          v-if="isUserAuthenticated"
          >Create your Gallery</router-link
        >
      </div>

      <div id="otherpages">
        <router-link
          to="/login"
          class="btn btn-warning"
          v-if="!isUserAuthenticated"
          >Login</router-link
        >

        <router-link
          to="/register"
          class="btn btn-primary"
          v-if="!isUserAuthenticated"
          >Register</router-link
        >
        <button
          id="logout"
          v-if="isUserAuthenticated"
          @click="onLogout"
          type="button"
          class="btn btn-alert btn-sm"
        >
          Log out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from "vuex";

export default {
  name: "NavBar",

  components: {},
  computed: {
    ...mapGetters({
      isUserAuthenticated: "auth/isUserAuthenticated",

      galleries: "galleries",
    }),
  },
  methods: {

    ...mapActions({
      logout: "auth/logout",
    }),
    onLogout() {
      this.logout();
      this.$router.push({
        name: "login",
      });
    },
  },
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

#logout {
  text-shadow: 3px 3px 3px red, 2px 2px 1px red;
  background: #eeeeee;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  font-size: large;
}
</style>
