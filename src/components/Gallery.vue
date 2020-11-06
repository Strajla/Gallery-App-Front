<template>
  <div>
    <h2>Gallery</h2>
    <h2>{{ gallery.name }}</h2>
    <h4>
      <router-link :to="{ name: 'authors', params: { id: gallery.user.id } }"
        >{{ gallery.user.first_name }} {{ gallery.user.last_name }}</router-link
      >
    </h4>
    <p>{{ gallery.created_at }}</p>
    <p>{{ gallery.description }}</p>
    <div>
      <b-carousel
        id="carousel-3"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
      >
        <b-carousel-slide
          v-for="(image, index) in gallery.images"
          :key="index"
          :img-src="image.source"
          alt="Card image cap"
          style=""
        >
        </b-carousel-slide>
      </b-carousel>
    </div>

    <h3>Comments:</h3>
    <div v-for="comment in gallery.comments" :key="comment.id">
      <p>{{ comment.text }}</p>
    </div>
  </div>
</template>

<script>
import { galleries } from "../services/Galleries";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      gallery: [],
    };
  },
  async created() {
    this.gallery = (await galleries.getOne(this.$route.params.id)).data;
  },
  methods: {
    ...mapActions(["getOne"]),
  },
  computed: {
    ...mapGetters({
      authors: "authors",
    }),
  },
};
</script>

<style></style>
