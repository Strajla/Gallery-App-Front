<template>
  <div v-if="gallery">
    <h1>Gallery</h1>
    <h2>Gallery: {{ gallery.name }}</h2>
    <h4>
      Author:
      <router-link :to="{ name: 'authors', params: { id: gallery.user.id } }"
        >{{ gallery.user.first_name }} {{ gallery.user.last_name }}</router-link
      >
    </h4>
    <p>Created_at: {{ gallery.created_at }}</p>
    <div class="description">Description: {{ gallery.description }}</div>
    <div class="card-body">
      <button
        type="button"
        @click="editGallery(gallery.id)"
        v-if="isUserAuthenticated && gallery.user.id == loggedUser.id"
        class="btn btn-success"
      >
        <router-link :to="{ name: 'edit-gallery', params: { id: gallery.id } }"
          >Edit Gallery</router-link
        >
      </button>
      <button
        type="button"
        @click="deleteGallery(gallery.id)"
        v-if="isUserAuthenticated && gallery.user.id == loggedUser.id"
        class="btn btn-danger"
      >
        Delete Gallery
      </button>
    </div>

    <div>
      <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
      >
        <b-carousel-slide
          v-for="(image, index) in gallery.images"
          :key="index"
          :img-src="image.source"
          alt="Card image cap"
        >
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="row">
      <h3>Comments:</h3>
      <div v-for="comment in comments" :key="comment.id">
        <p>Comment: {{ comment.text }}</p>
        <button
          v-if="isUserAuthenticated && comment.user_id == loggedUser.id"
          @click="deleteComment(comment.id)"
        >
          Delete
        </button>
      </div>
      <div>
        <form
          @submit.prevent="onSubmit"
          class="form-inline"
          v-if="isUserAuthenticated"
        >
          <textarea
            v-model="text"
            placeholder="Write your comment here!"
            class="pb-cmnt-textarea"
          ></textarea>
          <button class="btn btn-primary add" type="submit">
            Add Comment
          </button>
          <div class="alert alert-danger" v-if="errors.length">
            <ul class="mb-0">
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { galleries } from "../services/Galleries";
import { mapActions, mapGetters } from "vuex";

import { store } from "../vuex/store";

export default {
  data() {
    return {
      text: "",
      errors: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("before route enter", { to });
    store.dispatch("getOne", to.params.id).then(() => next());
  },

  methods: {
    ...mapActions({
      getOne: "getOne",
      addComment: "addComment",
      getLoggedUser: "auth/getLoggedUser",
      deleteGallery: "deleteGallery",
      deleteComment: "deleteComment",
    }),
    onSubmit() {
      this.errors = [];
      if (!this.text || this.text.length > 1000) {
        this.errors.push("Text  is required or to long.");
      }
      if (!this.errors.length) {
        const data = {
          text: this.text,
          user_id: this.loggedUser.id,
          gallery_id: this.gallery.id,
        };
        galleries.addComment(data, this.gallery.id);
      }
    },
  },
  computed: {
    ...mapGetters({
      // authors: "authors",
      isUserAuthenticated: "auth/isUserAuthenticated",
      loggedUser: "auth/loggedUser",
      comments: "comments",
      gallery: "gallery",
    }),
  },
};
</script>
<style scoped>
.row {
  margin-left: 600px;
  margin-left: 500px;
  width: 400px;
  display: flex;
  flex-direction: column;
}

.row textarea {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 400px;
}
.add {
  margin-left: 130px;
}
.description {
  font-size: 30px;
}
</style>
