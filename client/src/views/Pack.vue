<template>
<body>
    <div class="container">
    <br>
    <h1>{{this.messages[ id ].name}}</h1>
    <hr>
        <div class="row">
            <div class="col-sm-6">
                <div class="card mb-3" style="max-width: 45rem;">
                <img v-if="showMain" :src="this.messages[ id ].mainMenuPreviewURL" width="720" height="420">
                <img v-else :src="this.messages[ id ].secondMenuPreviewURL" width="720" height="420">
                </div>
                <div class="row">
                <div class="col-sm-6">
                <button type="button" @click="showMain = true" class="btn btn-outline-success btn-lg btn-block">Main Menu Preview</button>
                </div>
                <div class="col-sm-6">
                <button type="button" @click="showMain = false" class="btn btn-outline-success btn-lg btn-block">Second Menu Preview</button>
                </div>
                </div>
            </div>

            <div class="col-sm-5">
                <a class="mt-3 mb-3" :href="this.messages[ id ].mediafireDownload">
                    <button type="button" class="btn btn-outline-danger btn-lg btn-block">Download</button>
                </a>
                <div class="card mt-2 mb-2">
                    <h4 class="card-header">Preview Video</h4>
                    <iframe
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        width="599"
                        height="337"
                        type="text/html"
                        :src="this.messages[id].videoURL"
                    ></iframe>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <table class="table">
                            <tr>
                                <td>Creator</td>
                                <td>{{this.messages[id].creator}}</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td>{{this.messages[id].createdAt}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</template>

<script>
const API_URL = 'http://localhost:9000/api';

export default {
    props: ['id'],
    data: () => ({
        showMain: true,
        error: '',
        messages: [],
        message: {
        id: 0,
        name: '',
        creator: '',
        videoURL: '',
        mediafireDownload: '',
        createdAt: '',
        },
    }),
    computed: {
        reversedMessages() {
        return this.messages.slice().reverse();
        },
    },
    mounted() {
        fetch(API_URL).then((response) => response.json()).then((result) => {
        this.messages = result;
        console.log(this.messages[0].mediafireDownload);
        });
    },
};
</script>

<style>
    h1 {
        font-size: 4em;
    }

    .card {
        width: 600px;
    }
 
    .right {
        float: right;
        width: 600px;
    }

    .left {
        /* libtard owned */
        float: left;
        max-width: 20rem;
    }

    .btn-lg, .btn-group-lg > .btn {
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3rem;
    }
</style>
