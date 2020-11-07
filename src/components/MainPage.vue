<template>
  <div>
    <h2>Main Page</h2>

    <div class="d-flex justify-content-around flex-wrap">
      <gallery-card
        v-for="(gallery, index) in galleries"
        :key="index"
        :gallery="gallery"
      >
      </gallery-card>
      <div v-if="!galleries.length">
        <h1>We are out of any galleries</h1>
      </div>
    </div>
    <button @click="handleLoad">Load more...</button>
  </div>
</template>

<script>
import GalleryCard from "./GalleryCard";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      pagination: 10,
      currentSize: 10,
    };
  },

  components: {
    GalleryCard,
  },
  created() {
    this.fetchGalleries();
  },
  computed: {
    ...mapGetters({
      filteredGalleries: "filteredGalleries",
      galleries: "galleries",
    }),
  },
  methods: {
    ...mapActions({
      fetchGalleries: "fetchGalleries",
    }),

    handleLoad() {
      this.currentSize += this.pagination;
      this.fetchGalleries(this.currentSize);
    },
  },
};
</script>

<style>
#gallery-bio {
  display: flexbox;
  justify-content: space-between;
}
</style>
