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
    <img class="img-fluid"  src="images/index_img1.png" alt="NEWS">
    <div class="overlay">
    <h2>NEWS</h2>
    <p>
    <a href="#">SEE MORE</a>
    </p>
    </div>
    </div>
    
    </div>
    
    <div class ="col-md-4">
    
    <div class="hovereffect">
    <img class="img-fluid"  src="images/index_img2.png" alt="NEWS">
    <div class="overlay">
    <h2>ENTERTAINMENT</h2>
    <p>
    <a href="#">SEE MORE</a>
    </p>
    </div>
    </div>
    
    </div>
    
    <div class ="col-md-4">
    
    <div class="hovereffect">
    <img class="img-fluid"  src="images/index_img3.png" alt="NEWS">
    <div class="overlay">
        <h2>DOCUMENTARY</h2>
        <p>
            <a href="#">SEE MORE</a>
        </p>
    </div>
    </div>
    
    </div>
    <div class ="col-md-4">
    
    <div class="hovereffect">
    <img class="img-fluid"  src="images/index_img4.png" alt="NEWS">
    <div class="overlay">
    <h2>SPORTS</h2>
    <p>
    <a href="#">SEE MORE</a>
    </p>
    </div>
    </div>
    
    </div>
    
    <div class ="col-md-4">
    
    <div class="hovereffect">
    <img class="img-fluid"  src="images/index_img5.png" alt="NEWS">
    <div class="overlay">
    <h2>TRAVEL</h2>
    <p>
    <a href="#">SEE MORE</a>
    </p>
    </div>
    </div>
    
    </div>
    <div class ="col-md-4">
    
    <div class="hovereffect">
    <img class="img-fluid"  src="images/index_img6.png" alt="NEWS">
    <div class="overlay">
    <h2>TALK SHOW</h2>
    <p>
        <a href="#">SEE MORE</a>
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

   
    },
    components: {
      footercomponent: FooterComponent
    }
}