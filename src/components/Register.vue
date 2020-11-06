<template>
  <div class="signup-form">
    <form class="form-horizontal" @submit.prevent="onSubmit">
      <h2>Register</h2>
      <p class="hint-text">
        Create your account. It's free and only takes a minute.
      </p>
      <div class="form-group">
        <div class="alert alert-danger" v-if="errors.length">
          <ul class="mb-0">
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
        </div>
        
        <input
          v-model="first_name"
          type="text"
          class="form-control"
          name="first_name"
          id="first_name"
          required
          placeholder="First name"
        />
        <br />
        <input
          v-model="last_name"
          type="text"
          class="form-control"
          name="last_name"
          id="last_name"
          required
          placeholder="Last name"
        />
      </div>
      <div class="form-group">
        <input
          v-model="email"
          type="email"
          class="form-control"
          name="email"
          id="email"
          required
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <input
          v-model="password"
          type="password"
          class="form-control"
          name="password"
          id="password"
          required
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <input
          v-model="password_confirmation"
          type="password"
          class="form-control"
          name="password_confirmation"
          id="password_confirmation"
          required
          placeholder="Confirm password"
        />
      </div>

      <div class="form-group">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="gridCheck"
            required
          />
          <label class="form-check-label" for="gridCheck">
            I accept terms and conditions
          </label>
        </div>
      </div>
      <div v-if="error" class="alert alert-danger" role="alert">Error message</div>
      <div class="form-group">
        <button type="submit" class="btn btn-success btn-lg btn-block">
          Register Now
        </button>
      </div>
    </form>
    <div class="text-center">
      
Already have an account? <a href="/login">Sign in here</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: [],
    };
  },
  computed: {
    ...mapGetters({
      error: "auth/errors",
    }),
  },
  methods: {
    ...mapActions({
      register: "auth/register",
    }),
    onSubmit() {
      this.errors = [];
      if (!this.first_name) {
        this.errors.push(
          "First name value you provided is incorrect or to short, please try again."
        );
      }
      if (!this.last_name) {
        this.errors.push(
          "Last name value you provided is incorrect or to short, please try again."
        );
      }
      if (!this.email) {
        this.errors.push("Email adress is required.");
      }

      if (
        !this.password ||
        this.password.search(/\d/) == -1 ||
        this.password.length < 8
      ) {
        this.errors.push("Password is required.");
      }
      if (!this.password_confirmation) {
        this.errors.push("Please confirm your password once again.");
      }
      if (this.password !== this.password_confirmation) {
        this.errors.push(
          "Password confirmation doesn not match your password."
        );
      }

      this.register ({
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,

           }).then(() => {
                    if(this.errors === null) {
                       this.$router.push({ name: "main-page"});
                    } else {
                      console.log('error in your request');
                    }
                   
                });
    },
  },
};
</script>

<style></style>
