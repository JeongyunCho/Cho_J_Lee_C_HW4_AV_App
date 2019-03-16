import FooterComponent from "./FooterComponent.js";

export default {
    template: `
<div>

<section class="container">
    <h2 class="hide">Title</h2>
<div class="row" id="profTitle">
    <div class="col-sm-6 col-lg-5">
        <p>NEW MOVIES <span>SEE ALL VIDEOS <i class="fas fa-caret-right"></i> </span></p>
    </div>
</div>
</section>

<div id="imgSlider" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#imgSlider" data-slide-to="0" class="active"></li>
      <li data-target="#imgSlider" data-slide-to="1"></li>
      <li data-target="#imgSlider" data-slide-to="2"></li>
      <li data-target="#imgSlider" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="images/img1.png" alt="First slide">
        <div class="carousel-caption d-md-block">
                <h5>TOTORO - MY BEST NEIGHBOR</h5>
                <p>Animation Zibri published this animation in 2007.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="images/img2.png" alt="Second slide">        
        <div class="carousel-caption d-md-block">
                <h5>TOTORO - MY BEST NEIGHBOR</h5>
                <p>Animation Zibri published this animation in 2007.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="images/img3.png" alt="Third slide">
        <div class="carousel-caption d-md-block">
                <h5>TOTORO - MY BEST NEIGHBOR</h5>
                <p>Animation Zibri published this animation in 2007.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="images/img1.png" alt="Forth slide">
        <div class="carousel-caption d-md-block">
                <h5>TOTORO - MY BEST NEIGHBOR</h5>
                <p>Animation Zibri published this animation in 2007.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#imgSlider" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#imgSlider" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

<main class="container">

<div class="row" id="contTitle">
        <div class="col-sm-6 col-lg-5">
            <p>PARENTS VIDEO <span>SEE ALL VIDEOS <i class="fas fa-caret-right"></i> </span></p>
        </div>
</div>

<section id="content" class="row">
        <h2 class="hide">Contents</h2>
            
    <div class ="col-md-4">
    
    <div class="hovereffect">
    <img class="img-fluid"  src="images/action.png" alt="ACTION">
    <div class="overlay">
    <h2>ACTION</h2>
    <p>
       <a @click.prevent="tovideo('action')" href="#">SEE MORE</a>
    </p>
    </div>
    </div>
    
    </div>
    
    <div class ="col-md-4">
    
    <div class="hovereffect">
    <img class="img-fluid"  src="images/horror.png" alt="HORROR">
    <div class="overlay">
    <h2>HORROR</h2>
    <p>
       <a @click.prevent="tovideo('horror')" href="#">SEE MORE</a>
    </p>
    </div>
    </div>
    
    </div>
    
    <div class ="col-md-4">
    
    <div class="hovereffect">
    <img class="img-fluid"  src="images/fantasy.png" alt="FANTASY">
    <div class="overlay">
        <h2>FANTASY</h2>
        <p>
               <a @click.prevent="tovideo('fantasy')" href="#">SEE MORE</a>
        </p>
    </div>
    </div>
    
    </div>
    <div class ="col-md-4">
    
    <div class="hovereffect">
    <img class="img-fluid"  src="images/adventure.png" alt="ADVENTURE">
    <div class="overlay">
    <h2>ADVENTURE</h2>
    <p>
       <a @click.prevent="tovideo('adventure')" href="#">SEE MORE</a>
    </p>
    </div>
    </div>
    
    </div>
    
    <div class ="col-md-4">
    
    <div class="hovereffect">
    <img class="img-fluid"  src="images/family.png" alt="FAMILY">
    <div class="overlay">
    <h2>FAMILY</h2>
    <p>
    <a @click.prevent="tovideo('family')" href="#">SEE MORE</a>
    </p>
    </div>
    </div>
    
    </div>
    <div class ="col-md-4">
    
    <div class="hovereffect">
    <img class="img-fluid"  src="images/crime.png" alt="CRIME">
    <div class="overlay">
    <h2>CRIME</h2>
    <p>
    <a @click.prevent="tovideo('crime')" href="#">SEE MORE</a>
    </p>
    </div>
    </div>
    
    </div>
    </section>

</main>


<footercomponent></footercomponent>

</div>


    `,

    data() {
        return {
        }
    },


    methods: {
      tovideo(event){
        this.$router.push({ name: "videohome", params: { genre: event, age:"parent" } });
        localStorage.setItem("videoAgeView","parent");
      }
   
    },
    components: {
      footercomponent: FooterComponent
    }
}