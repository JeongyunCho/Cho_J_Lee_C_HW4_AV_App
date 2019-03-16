
import UsersComponent from './components/UsersComponent.js';
import MainComponent from './components/MainComponent.js';
import KidsComponent from './components/KidsComponent.js';
import ParentsComponent from './components/ParentsComponent.js';
import LoginComponent from './components/LoginComponent.js';
import UserListsComponent from './components/UserListsComponent.js';
import EditComponent from './components/EditComponent.js';
import CreateComponent from './components/CreateComponent.js';
import AdminComponent from './components/AdminComponent.js';
import VideoHomeComponent from './components/VideoHomeComponent.js';
import UserHomeComponent from './components/UserHomeComponent.js';

let router = new VueRouter({

  routes: [
      { path: '/', redirect: { name: "main"} },
      { path: '/home', redirect: { name: "main"} },
      { path: '/main', name: "main", component: MainComponent },
      { path: '/kids', name: "kids", component: KidsComponent,beforeEnter: (to, from, next) => {
        if (localStorage.getItem("authenticated")=="true") {
          next();
        } else {
          next("/login");
        }
     
      }},
      { path: '/parents', name: "parents", component: ParentsComponent,beforeEnter: (to, from, next) => {

        if (localStorage.getItem("adultauthenticated")=="true") {
          next();
        }else if(localStorage.getItem("adultauthenticated")=="false"){
          vm.toastmessage = "You are NOT eligible for adult contents!!";
          $('.toast').toast('show');
          next("/main");
        } else {
          next("/login");
        }
      } },
      { path: '/login', name: "login", component: LoginComponent, props: true },
      { path: '/userlists', name: "userlists", component: UserListsComponent ,beforeEnter: (to, from, next) => {
        if (localStorage.getItem("authenticated")=="true") {
          next();
        } else {
          next("/login");
        }
     
      }},
      { path: '/edit', name: "edit", component: EditComponent, props: true ,beforeEnter: (to, from, next) => {
        if (localStorage.getItem("authenticated")=="true") {
          next();
        } else {
          next("/login");
        }
      }},
      { path: '/create', name: "create", component: CreateComponent, props: true},

      { path: '/videohome', name: "videohome", component: VideoHomeComponent, props: true ,beforeEnter: (to, from, next) => {
        if (localStorage.getItem("authenticated")=="true") {
          next();
        } else {
          next("/login");
        }
      }},
      { path: '/users', name: 'users', component: UsersComponent},
      { path: '/userhome', name: "home", component: UserHomeComponent, props: true },
      { path: '/admin', name: 'admin', component: AdminComponent }
  ]
});

const vm = new Vue({
 
  data: {
    authenticated: false,
    user: [],

    toastmessage: "Login failed!",
    navlist:[
      {
        name:"home",
        url:"main"
      },
      {
        name:"parents",
        url:"parents"
      },
      {
        name:"kids",
        url:"kids"
      }

    ]
  },
  created: function() {
    if (localStorage.getItem("authenticated")=="true") {
      this.authenticated = true;
     
    }    
 
  },


  methods: {
    logout() {
      // delete local session
      localStorage.setItem("authenticated", false);
      localStorage.setItem("adultauthenticated", false);
        localStorage.removeItem("cachedUser");
        localStorage.removeItem("authenticated");
        localStorage.removeItem("currentUserID");
      
   
      this.authenticated= false;
      // push user back to login page
      this.$router.push({ path: "/main" });
    },
    setAuthenticated(status, data) {
      if(status){
        this.authenticated = status;
      }
      this.user = data;
      // console.log(data);
    },

    popError(errorMsg) {
      // set the error message string and show the toast notification
      this.toastmessage = errorMsg;
      $('.toast').toast('show');
    }
  },

  router: router
}).$mount("#app");


