<template>
  <div>
    <div class="card" style="width: 400px; height: 400px; margin-top: 110px ">
      <img
        class="card-img-top"
        :src="gallery.images[0].source"
        alt="Card image cap"
      />
      <h4 class="card-title">
        <router-link :to="{ name: 'gallery', params: { id: gallery.id } }">{{
          gallery.name
        }}</router-link>
      </h4>
      <ul
        style="list-style-type:upper-roman"
        class="list-group list-group-flushh"
      >
        <li class="list-group-item">
          <router-link
            :to="{ name: 'authors', params: { id: gallery.user.id } }"
            >{{ gallery.user.first_name }}
            {{ gallery.user.last_name }}</router-link
          >
        </li>

        <li class="list-group-item">{{ gallery.created_at }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryCard",
  props: {
    gallery: Object,
    user: Object,
  },
};
</script>

<style></style>
