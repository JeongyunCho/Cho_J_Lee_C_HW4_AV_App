export default {
    props: ['genre'],

    template: `
    <div>

<div class="container vidContainer">
  
<div class="row flex-md-row vidInfo">
 
  <div class="col-12 order-12 col-md-4 ">
    <h2> Video title </h2>
    <p>  video details </p>
  </div>  
  
  <div class="col-12 col order-1 col-md-8 vid">  
      <video controls autoplay muted>
          <source src="video/avengers.mp4" type="video/mp4">
      </video>
  </div>

</div>

</div>

<div class ="container">

<div class="row">

    <div class="col-12 col-md-8 mx-auto">
        <ul class="genList text-center">
            <li><button type="submit" name="action">Action</button></li>
            <li><button type="submit" name="horror">Horror</button></li>
            <li><button type="submit" name="fantasy">Fantasy</button></li>
            <li><button type="submit" name="adventure">Adventure</button></li>
            <li><button type="submit" name="family">Family</button></li>
            <li><button type="submit" name="all" class="selected">All</button></li>
        </ul>

    </div>

 </div>

</div>

<div class="container vidList">
<div class="row flex-column-reverse flex-md-row">
    <div class="col-md-4">
        <div class="card">   
        <div class="card-header">
          <img class="card-img" src="https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg" alt="Card image">
        </div>  
        
        <div class="card-body">
        <h1 class="card-title text-center"> video title </h1>   
        <p class="card-text text-center"> video storyline </p>
        <a href="#" class="trailerLnk">Watch Trailer<span><i class="far fa-play-circle"></i></span></a>
        </div> 
        </div>
    </div>
</div>
</div>
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
        console.log('params:', this.genre);

        // this.loadMedia(null, "video");
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