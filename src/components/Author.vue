<template>
  <div>
    <h2>Creators</h2>
    <div>
      <h3>{{ author.first_name }}</h3>
      <div v-for="author in author.galleries" :key="author.id">
        <h4>{{author.name}}</h4>
        <p>{{author.description}}</p>
        <h5>{{author.created_at}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { authors } from "../services/Author";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      author: [],
    };
  },

  async created() {
    this.author = (await authors.getOne(this.$route.params.id)).data;
    console.log(this.author)
  },

  methods: {
    ...mapActions(["getOneAuthor"]),
  },
};
</script>

<style></style>
