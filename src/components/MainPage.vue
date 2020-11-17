<template>
  <div>
     <div class="searchBar">
        <h1>All Galleries</h1>
      <div>
        <SearchGallery @handleSearchText="setSearchText"/>
      </div>
      </div>
    <div class="d-flex justify-content-around flex-wrap">
      <gallery-card
        v-for="gallery in galleries"
        :key="gallery.id"
        :gallery="gallery"
        
      >
      </gallery-card>
    </div>
    <button class="btn btn-danger" v-if="currentSize <= numberPerPage" @click="loadMoreGalleries">Load More...</button>
  </div>
</template>

<script>
import SearchGallery from './SearchGallery'
import GalleryCard from "./GalleryCard";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      searchText: '',
      currentSize: 10,
    };
  },

  components: {
    GalleryCard,
    SearchGallery
  },
  computed: {
    ...mapGetters({
      galleries: 'galleries',
      numberPerPage: 'numberPerPage'
    }),
  },
  methods: {
    ...mapActions({
      fetchGalleries: "fetchGalleries",
    }),

   loadMoreGalleries() {
      this.currentSize += 10
      this.fetchGalleries({'pagination': this.currentSize, 'searchText': this.searchText})
    },
    setSearchText(search) {
      this.searchText = search
      this.fetchGalleries({'pagination': this.currentSize, 'searchText': this.searchText})
    }
    },
    beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.fetchGalleries({'pagination':10, 'searchText': ''});
            })
      }
}
</script>

<style>
#gallery-bio {
  display: flexbox;
  justify-content: space-between;
}

.searchBar {
  display: flex;
  justify-content: space-between;
}
</style>
