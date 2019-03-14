import FooterComponent from "./FooterComponent.js";

export default {
    template: `
<div>

<div id="imgSlider" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
  <li data-target="#imgSlider" data-slide-to="0" class="active"></li>
  <li data-target="#imgSlider" data-slide-to="1"></li>
  <li data-target="#imgSlider" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img class="d-block w-100" src="images/img1.png" alt="First slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="images/img2.png" alt="Second slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="images/img3.png" alt="Third slide">
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

<section class="row">
    <h2 class="hide">Banner</h2>
<div class="col-lg-12">
   
</div>
</section>

<main class="container">

<div class="row" id="profTitle">
<div class="col-sm-6 col-lg-5">
    <p>PROFILES <span>SEE ALL VIDEOS <i class="fas fa-caret-right"></i> </span></p>
</div>
</div>

<section id="introP" class="row">
<h2 class="hide">Text Introduction</h2>
<div class="col-md-4">
    <h2 class="text-center">PARENTS</h2>
    <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
</div>

<div class="col-md-4">
        <h2 class="text-center">KIDS</h2>
        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
</div>

<div class="col-md-4">
        <h2 class="text-center">ALL AGES</h2>
        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
</div>
</section>

<div class="row" id="contTitle">
    <div class="col-sm-6 col-lg-5">
        <p>CONTENTS <span>SEE ALL VIDEOS <i class="fas fa-caret-right"></i> </span></p>
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