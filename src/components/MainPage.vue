<template>
  <div>
    <gallery-card
      v-for="(gallery, index) in galleries"
      :key="index"
      :gallery="gallery"
    >
    </gallery-card>
  </div>
</template>

<script>
import GalleryCard from './GalleryCard'
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
        GalleryCard
      },
  computed: {
    ...mapGetters([
      'galleries'
      ]),
  },
  methods: {
    ...mapActions(['fetchGalleries']),
  },
  created() {
    this.fetchGalleries();
  },
};
</script>

<style>
img {
  height: 200px;
  width: 150x;
}

#gallery-bio {
  display: flexbox;
  justify-content: space-between;
}
</style>
