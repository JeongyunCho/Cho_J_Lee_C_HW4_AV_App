export default {
    props: ['currentuser'],

    template: `
    <div class="container">
    <!-- render this if we're viewing television or film -->
        <div class="row" v-if="activeMediaType == 'video' && retrievedMedia.length > 0">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-title">{{currentMediaDetails.movies_title}}</h4>
                <p class="media-details" v-html="currentMediaDetails.movies_storyline"></p>
                <span class="media-time">{{currentMediaDetails.movies_runtime}}</span>
                <span class="media-year">Released in {{currentMediaDetails.movies_year}}</span>
            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <video autoplay controls muted :src="'video/' + currentMediaDetails.movies_trailer" class="fs-video"></video>
            </div>
        </div>

        <div class="row" v-if="activeMediaType == 'audio' && retrievedMedia.length > 0">
            <div class="col-12 order-2 order-md-1 col-md-6 media-container">
                <h4 class="media-title">{{currentMediaDetails.audio_artist}} * {{currentMediaDetails.audio_title}}</h4>
                <p class="media-details" v-html="currentMediaDetails.audio_storyline"></p>
                <span class="media-year">Released in {{currentMediaDetails.audio_year}}</span>              
            </div>

            <div class="col-12 order-1 order-md-2 col-md-6 audio-wrapper">
                <audio autoplay controls :src="'audio/' + currentMediaDetails.audio_src"/>
                <img :src="'images/audio/' + currentMediaDetails.audio_cover" alt="album art" class="img-fluid"/>
            </div>
        </div>

        <div class="row"> <!-- 2-up for nav and media info -->
            <nav class="col-12 col-sm-3 side-nav">
                <ul class="media-type">
                    <li v-for="media in mediaTypes" :data-type="media.description" @click="loadMedia(null, media.description)">
                        <span>
                            <i v-bind:class="[media.iconClass]"></i>
                        </span>
                        
                        <span class="d-none d-md-block">{{ media.description }}</span>
                    </li>
                </ul>
            </nav>

            <div class="col-12 col-sm-9 media-info">
                <!-- genres for video -->
                    <ul v-if="activeMediaType == 'video'" class="media-genres">
                        <li>
                            <a href="action" @click.prevent="loadMedia('action', null)">Action</a>
                        </li>
                        <li>
                            <a href="comedy" @click.prevent="loadMedia('comedy', null)">Comedy</a>
                        </li>
                        <li>
                            <a href="family" @click.prevent="loadMedia('family', null)">Family</a>
                        </li>
                        <li>
                            <a href="horror" @click.prevent="loadMedia('fantasy', null)">Fantasy</a>
                        </li>
                        <li>
                            <a href="horror" @click.prevent="loadMedia(null, null)">All</a>
                        </li>
                    </ul>

                <!-- genres for audio -->
                <ul v-else class="media-genres">
                        <li>
                            <a href="action" @click.prevent="loadMedia('alternative', null)">Alternative</a>
                        </li>
                        <li>
                            <a href="comedy" @click.prevent="loadMedia('blues', null)">Blues</a>
                        </li>
                        <li>
                            <a href="family" @click.prevent="loadMedia('rock', null)">Rock</a>
                        </li>
                        <li>
                            <a href="horror" @click.prevent="loadMedia('soundtrack', null)">Soundtracks</a>
                        </li>
                        <li>
                            <a href="horror" @click.prevent="loadMedia(null, 'audio')">All</a>
                        </li>
                    </ul>
                <div class="thumb-wrapper clearfix">
                    <img v-if="activeMediaType == 'video'" v-for="media in retrievedMedia" :src="'images/video/' + media.movies_cover" alt="media thumb" @click="switchActiveMedia(media)" class="img-thumbnail rounded float-left media-thumb">
                    <img v-if="activeMediaType == 'audio'" v-for="media in retrievedMedia" :src="'images/audio/' + media.audio_cover" alt="media thumb" @click="switchActiveMedia(media)" class="img-thumbnail rounded float-left media-thumb audio-thumb">
                </div>
            </div>       
        </div> <!-- end 2-up for media info -->
    </div>
    `,

    data() {
        return {
            // set the default to video -> will get a random video via query on create
            activeMediaType: "video",

            // push first (or random) media object here (selected / filtered on create)
            currentMediaDetails: { 
                source: "avengers.mp4",
            },

            // could add more media types here in future
            mediaTypes: [
                { iconClass: "fas fa-headphones", description: "audio" },
                { iconClass: "fas fa-film", description: "video" },
                { iconClass: "fas fa-tv", description: "television" }
            ],

            retrievedMedia: [],

            // controls mute / unmute for video element
            vidActive: false
        }
    },

    created: function() {
        console.log('params:', this.$route.params);

        this.loadMedia(null, "video");
    },

    methods: {

        loadMedia(filter, mediaType) {
            // set the active media type
            if (this.activeMediaType !== mediaType && mediaType !== null) {
                this.activeMediaType = mediaType;
            }
            // build the url based on any filter we pass in (will need to expand on this for audio)

            let url = (filter == null) ? `./admin/index.php?media=${this.activeMediaType}` : `./admin/index.php?media=${this.mediaType}&&filter=${filter}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {                    
                    // we're gettin them all, dump it all in the media container
                    this.retrievedMedia = data;
                    // grab the first one in the list and make it active
                    this.currentMediaDetails = data[0];                    
                })
            .catch(function(error) {
                console.error(error);
            });
        },

        switchActiveMedia(media) {
            console.log(media);

            this.currentMediaDetails = media;
        }
    }
}