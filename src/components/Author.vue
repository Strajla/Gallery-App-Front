<template>
  <div>
    <h2>Creators</h2>
    <div>
      <h3> Author first_name: {{ author.first_name }}</h3>
      <h3> Author last_name: {{author.last_name}} </h3>
      <div v-for="author in author.galleries" :key="author.id">
        <h4>Gallery name: <router-link :to="{ name: 'gallery', params: {id: author.id }}">{{author.name}}</router-link></h4>
        <p class="description">{{author.description}</p>
        <h5>Created_at: {{author.created_at}}</h5>
        <img
          class="card-img-top"
          :src="author.images[0].source"
          alt="Card image cap"
        />
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
    console.log(this.author);
  },

  methods: {
    ...mapActions(["getOneAuthor"]),
  },
};
</script>

<style></style>
