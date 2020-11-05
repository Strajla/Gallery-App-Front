<template>

<div id="app_login">
        <h3>Login</h3>

        <form id="loginForm" @submit.prevent="submit">
            <div class="form-group">
                <label for="email">Email:</label> <br>
                <input v-model="email" class="form-control" id="email" type="email" placeholder="Enter your email here...">
            </div>

            <div class="form-group">
                <label for="password">Password:</label> <br>
                <input v-model="password" class="form-control" id="password"  type="password" placeholder="Enter your password here...">
            </div>

            <button class="btn btn-success" type="submit">Login</button>

        </form>           
    </div>
    
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'Login',

    data() {
        return {
            email: "",
            password: "",
            errors: []
        };
    },
    methods: {
        ...mapActions({
            login: 'auth/login'
        }),
        submit() {
               this.login({
                    email: this.email,
                    password: this.password
                }).then(() => {
                    if(this.error === null) 
                    console.log('Prosao sam')
                    this.$router.push({ name: "main-page"});
                });
            }
  
    }
}

</script>

<style>

form {
    width: 40%;
    margin: 0 auto;
    margin-top: 2rem;
}

</style>