<template>
<div>

      <div>
        <h1>Main Page Galleries</h1>
        <ul v-for="gallerie in galleries" :key="gallerie.id">
            <li>sdfdsf</li>
            <li>{{gallerie.name}}</li>
            <li>{{gallerie.description}}</li>
            <li>{{gallerie.user_id}}</li>
            <li>{{gallerie.user.first_name}}</li>
            <li>{{gallerie.images[0].source}}</li>
            <img class="card-img-top" :src="gallerie.images[1].source" alt="Card image cap">
        </ul>
    </div>

</div>
    
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
     props: {
        gallerie :Object,
    },
      computed: {
      ...mapGetters([
          
          'galleries'
      ]),
      },
    methods: {
      ...mapActions( [
          'fetchGalleries'
      ]),
    },
    created() {
      this.fetchGalleries();
    },
}
</script>

<style>

img {
    height: 200px;
    width: 150x;
}

</style>