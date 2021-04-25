<template>
  <div class="container">
    <br>
    <h1>{{ $route.params.query }}</h1>
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
      <button type="button" class="btn btn-secondary">Sort</button>
      <div class="btn-group" role="group">

        <button v-if="this.sortUpload === true" id="btnGroupDrop1" type="button" class="btn btn-outline-secondary dropdown-toggle" 
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Recently Uploaded</button>

        <button v-else id="btnGroupDrop1" type="button" class="btn btn-outline-secondary dropdown-toggle" 
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last Recently Uploaded</button>

        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <a class="dropdown-item" href="#" @click="sortUpload = true">Recently Uploaded</a>
          <a class="dropdown-item" href="#" @click="sortUpload = false">Last Recently Uploaded</a>
        </div>
      </div>
    </div>

    <button type="button" class="btn btn-outline-success disabled ml-3">There are a total of {{messages.length}} TexturePacks</button>


    <!-- this is utterly fucking retarded -->
    <div v-if="sortUpload === true" class="row">
      <div class="cardthing" v-for="message in reversedMessages" :key="message._id">
        <div class="card mb-3 mt-3 ml-3">
          <h5 class="card-header">{{ message.name }}</h5>
          <router-link :to="{ name: 'pack', params: { id: message.id } }">
            <img class="imgHome" :src="message.mainMenuPreviewURL" width="348" height="200">
          </router-link>
          <div class="card-body">
            <p class="card-text">Made by: {{ message.creator }}</p>
          </div>
          <div class="card-footer text-muted">
            <a :href="message.mediafireDownload">
              <button type="button" class="btn btn-outline-danger">
                Download
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div  v-else-if="this.sortUpload === false" class="row">
      <div class="cardthing" v-for="message in messages" :key="message._id">
        <div class="card mb-3 mt-3 ml-3">
          <h5 class="card-header">{{ message.name }}</h5>
          <router-link :to="{ name: 'pack', params: { id: message.id } }">
            <img class="imgHome" :src="message.mainMenuPreviewURL" width="348" height="200">
          </router-link>
          <div class="card-body">
            <p class="card-text">Made by: {{ message.creator }}</p>
          </div>
          <div class="card-footer text-muted">
            <a :href="message.mediafireDownload">
              <button type="button" class="btn btn-outline-danger">
                Download
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
//const API_URL = 'https://image-bored.herokuapp.com/messages';
const API_URL = 'http://localhost:9000/api';

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data: () => ({
    sortUpload: true,
    props: ['query'],
    error: '',
    messages: [],
    message: {
      id: 0,
      name: '',
      creator: '',
      videoURL: '',
      mediafireDownload: '',
      mainMenuPreviewURL: '',
      secondMenuPreviewURL: '',
    },
  }),
  mounted() {
    // This doesn't work for some reason? (can anybody fix this for me please lol)
    // this.sortUpload = localStorage.sortUpload;

    fetch(API_URL).then((response) => response.json()).then((result) => {
      let r = Math.random().toString(36).substring(7);
      this.messages = result;
      console.log(this.messages[0].mediafireDownload);
    });
  },
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();
    },
  },
  watch: {
    sortUpload(sortUpload) {
      localStorage.sortUpload = sortUpload;
      console.log(sortUpload);
    }
  }
};
</script>

<style>
  .card {
    width: 350px;
  }

  .imgHome:hover {
    transform: scale(0.95);
  	transition-duration: 0.1s;
  }
</style>