<template>

    <div>
        <div id ="nav">

            <router-link to="/" class="navbar-brand" >Main Page</router-link>
            <router-link to="/register" class="navbar-brand register">Register</router-link>
            <router-link to="/login" class="navbar-brand login">Login</router-link>

        </div>


    </div>

    
</template>

<script>
export default {
    name: 'NavBar',

    components: {

    }
    
}
</script>

<style lang="stylus" scoped>

</style>