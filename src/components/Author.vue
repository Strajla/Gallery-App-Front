<template>
  <div>
    <h2>Creators</h2>
    <div>
      <h3>{{ author.first_name }}</h3>
      <div v-for="author in author.galleries" :key="author.id">
        <h4>Author name</h4>
        <p>Description</p>
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
  },

  methods: {
    ...mapActions(["getOneAuthor"]),
  },
};
</script>

<style></style>
