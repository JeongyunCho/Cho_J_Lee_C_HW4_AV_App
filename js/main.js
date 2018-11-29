(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            welcomemessage : "Roku DB Connection Test",
            videodata : [],
            singlemoviedata : [],

            videotitle : "",
            videosource : "",
            videodescription : "",
            showDetails : false
        },

        created : function() {
            this.fetchMovieData(null);
        },

        methods : {
            fetchMore(e) {
                this.fetchMovieData(e.currentTarget.dataset.movie); // this will be a number (id)
                //console.log(e.currentTarget.dataset.movie);
            },

            loadMovie(e) {
                // stub
                e.preventDefault();

                dataKey = e.currentTarget.getAttribute('href');
                console.log(e.currentTarget.getAttribute('href'));

                currentData = this.videodata.filter(video => video.videos_url === dataKey);

                this.videotitle = currentData[0].videos_name;
                this.videodescription = currentData[0].videos_desc;
                this.videosource = dataKey;

                this.showDetails = true;

                setTimeout(function() { window.scrollTo(0, 1200); }, 500);
            },

            scrollBackUp() {
                window.scrollTo(0, 0);
                this.showDetails = false;
                this.videosource = "";
            },

            fetchMovieData(video) {
                url = video ? `./includes/index.php?video=${video}` : './includes/index.php';

                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    if (video) {
                        // getting one movie, so use the single array
                        console.log(data);
                        this.singlemoviedata = data;
                    } else {
                        // push all the video (or portfolio content) into the video array
                        console.log(data);
                        this.videodata = data;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        }
    });
})();