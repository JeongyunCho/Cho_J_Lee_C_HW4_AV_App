export default {
    props: ['genre', 'age'],

    template: `
    <div>

        <div class="container vidContainer">
        
        <div class="row flex-md-row vidInfo">
        
        <div class="col-12 order-12 col-md-4 ">
            <h2> {{currentMediaDetails.movies_title}} </h2>
            <p>  {{currentMediaDetails.movies_storyline}} </p>
            <p>  {{currentMediaDetails.movies_runtime}} </p>
        </div>  
        
        <div class="col-12 col order-1 col-md-8 vid">  
        <iframe width="90%" height="350px" :src="currentMediaDetails.movies_trailer" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   
        </div>

        </div>

        </div>

        <div class ="container">

        <div class="row">

            <div class="col-12 col-md-8 mx-auto">
                <ul class="genList text-center" v-if="age=='parent'" >
                    <li><button type="submit" id="action" class="genBtn" name="action" @click.prevent="loadMedia('action', null,'parent')">Action</button></li>
                    <li><button type="submit" id="horror" class="genBtn" name="horror" @click.prevent="loadMedia('horror', null,'parent')">Horror</button></li>
                    <li><button type="submit" id="fantasy" class="genBtn" name="fantasy" @click.prevent="loadMedia('fantasy', null,'parent')">Fantasy</button></li>
                    <li><button type="submit" id="adventure" class="genBtn" name="adventure" @click.prevent="loadMedia('adventure', null,'parent')">Adventure</button></li>
                    <li><button type="submit" id="family" class="genBtn" name="family" @click.prevent="loadMedia('family', null,'parent')">Family</button></li>
                    <li><button type="submit" id="crime" class="genBtn" name="crime" @click.prevent="loadMedia('crime', null,'parent')">Crime</button></li>
                    <li><button type="submit" id="null" class="genBtn" name="all" @click.prevent="loadMedia('null', null,'parent')">All</button></li>
                </ul>

                <ul class="genList text-center" v-else >
                <li><button type="submit" id="action" class="genBtn" name="action" @click.prevent="loadMedia('action', null,'kid')">Action</button></li>
                <li><button type="submit" id="fantasy" class="genBtn" name="fantasy" @click.prevent="loadMedia('fantasy', null,'kid')">Fantasy</button></li>
                <li><button type="submit" id="adventure" class="genBtn" name="adventure" @click.prevent="loadMedia('adventure', null,'kid')">Adventure</button></li>
                <li><button type="submit" id="tale" class="genBtn" name="tale" @click.prevent="loadMedia('fairy tale', null,'kid')">tale</button></li>
                <li><button type="submit" id="sport" class="genBtn" name="sport" @click.prevent="loadMedia('sports', null,'kid')">Sports</button></li>
                <li><button type="submit" id="hero" class="genBtn" name="hero" @click.prevent="loadMedia('super hero', null,'kid')">Super Hero</button></li>
                <li><button type="submit" id="null" class="genBtn" name="all" @click.prevent="loadMedia('null', null,'kid')">All</button></li>
            </ul>

            </div>

        </div>

        </div>

        <div class="container vidList">
        <div class="row flex-column-reverse flex-md-row">
            <div class="col-md-4" v-for="media in retrievedMedia">
                <div class="card" @click="switchActiveMedia(media)">   
                <div class="card-header">
                <img class="card-img" :src="'images/video/' + media.movies_cover" alt="Card image" >
                </div>  

                <div class="card-body">
                <h1 class="card-title text-center"> {{media.movies_title}} </h1>   
                <p class="card-text text-center"> {{media.movies_release}} </p>
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
            activeMediaType: "video",
            adultAllowed:"",
            // TODO: add more media later on
            currentMediaDetails: { 
                source: "avengers.mp4",
            },

            retrievedMedia: [],

            // controls mute / unmute for video element
            vidActive: false
        }
    },

    created: function() {
        //  store in session to keep data in browser refresh
             // double check
            this.adultAllowed=localStorage.getItem("adultauthenticated");
            if(this.adultAllowed=="false"&&this.age=="parent"){
                this.age = "kid";
            }
            this.loadMedia(this.genre, "video",localStorage.getItem("videoAgeView"));
            console.log(localStorage.getItem("videoAgeView"));

    },

    methods: {

        loadMedia(filter, mediaType,ageAllow) {
            // add class selected to genre list.
console.log(ageAllow);

            if(filter && mediaType=="null"){
                let filterid = '#'+filter;
                const genBtns = document.querySelectorAll(".genBtn");
                let genBtn =  document.querySelector(filterid);
    
                for(let i =0; i<genBtns.length; i++){
                    genBtns[i].classList.remove('selected');
                }
    
                genBtn.classList.add('selected');
            }
           
        

            if (this.activeMediaType !== mediaType && mediaType !== null) {
                this.activeMediaType = mediaType;
            }

            // build the url based on any filter we pass in (will need to expand on this for audio)

            let url = (filter == null) ? `./admin/index.php?media=${this.activeMediaType}&&age=${ageAllow}` : `./admin/index.php?media=${this.mediaType}&&filter=${filter}&&age=${ageAllow}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {                    

                    this.retrievedMedia = data;
                    this.currentMediaDetails = data[0];         
                    console.log(this.currentMediaDetails);
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