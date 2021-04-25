<template>
<div class="container">
  <h1 class="mt-3">Request a TexturePack</h1>
  <hr>
  <form @submit.prevent="sendRequest">
    <div class="form-group">
      <label for="username">Name of the Texture Pack</label>
      <input v-model="request.name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="TexturePack Name" required>
      <small id="emailHelp" class="form-text text-muted">Self explanatory.</small>
    </div>

    <div class="form-group">
      <label for="username">Creator of the Texture Pack</label>
      <input v-model="request.creator" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Creator Name" required>
      <small id="emailHelp" class="form-text text-muted">Credit given to the person who actually made the pack.</small>
    </div>

    <div class="form-group">
      <label for="username">Video preview of the Texture Pack</label>
      <input v-model="request.videoURL" type="url" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="eg: https://www.youtube.com/watch?v=dQw4w9WgXcQ" required>
      <small id="emailHelp" class="form-text text-muted">YouTube video to show the Texture Pack.</small>
    </div>

    <div class="form-group">
      <label for="username">Download Link</label>
      <input v-model="request.downloadURL" type="url" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="eg: https://www.mediafire.com/file/d8bu142ly27bemc/ssohv2.0.zip/file" required>
      <small id="emailHelp" class="form-text text-muted">Download link for PC.</small>
    </div>

    <button type="submit" class="btn btn-outline-primary">Submit</button>

    <div class="alert alert-dismissible alert-info mt-3">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      Note: If the page doesn't reload automatically try again in about 6-8 minutes.
    </div>
  </form>
</div>
</template>

<script>
const API_URL = 'http://localhost:9000/requests';
/* eslint-disable */
  export default {
    data: () => ({
      err: '',
      requests: [],
      request: {
        name: '',
        creator: '',
        videoURL: '',
        downloadURL: '',
      }
    }),
    mounted() {
    },
    methods: {
      sendRequest () 
      {
        fetch(API_URL).then((response) => response.json()).then((result) => {
        this.requests = result;
        });
        
        fetch(API_URL, {
          method: 'POST',
          body: JSON.stringify(this.request),
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((response) => response.json()).then((result) => {
          if (result.details) {
            // error
            const err = result.details.map((detail) => detail.request).join('. ');
            this.err = err;
          } else {
            // replace this later.
            location.reload();
            this.err = '';
            this.showMessageForm = false;
            this.requests.push(result);
          }
        });
    },
    }
  }
</script>