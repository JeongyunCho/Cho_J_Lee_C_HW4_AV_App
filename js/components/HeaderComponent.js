export default {
  props: ["navlist"],
  template: `
  <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
  <div class="container">
    <a href="index.html" id="headName" class="navbar-brand">ROKU FLASHBACK</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-link" v-for="nav in navlist">
          <router-link :to="nav">{{ nav }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    `
};
