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
    </div>
  </div>
</template>

<script>
import GalleryCard from './GalleryCard'
import {mapGetters, mapActions} from 'vuex'
export default {
      components: {
        GalleryCard
      },
    created() {
      this.fetchGalleries();
    },
      computed: {
      ...mapGetters({
          galleries: 'galleries'
      }),
      },
    methods: {
      ...mapActions( {
          fetchGalleries: 'fetchGalleries',

    }),
    },
}
</script>

<style>
#gallery-bio {
  display: flexbox;
  justify-content: space-between;
}
</style>
