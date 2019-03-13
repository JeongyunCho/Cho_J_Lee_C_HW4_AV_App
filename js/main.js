
import UsersComponent from './components/UsersComponent.js';
import MainComponent from './components/MainComponent.js';
import KidsComponent from './components/KidsComponent.js';
import ParentsComponent from './components/ParentsComponent.js';
import LoginComponent from './components/LoginComponent.js';
import EditComponent from './components/EditComponent.js';
import CreateComponent from './components/CreateComponent.js';
import AdminComponent from './components/AdminComponent.js';
import UserHomeComponent from './components/UserHomeComponent.js';

let router = new VueRouter({

  routes: [
      { path: '/', redirect: { name: "main"} },
      { path: '/home', redirect: { name: "main"} },
      { path: '/main', name: "main", component: MainComponent },
      { path: '/kids', name: "kids", component: KidsComponent },
      { path: '/parents', name: "parents", component: ParentsComponent },
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/edit', name: "edit", component: EditComponent },
      { path: '/create', name: "create", component: CreateComponent },
      { path: '/users', name: 'users', component: UsersComponent },
      { path: '/userhome', name: "home", component: UserHomeComponent, props: true },
      { path: '/admin', name: 'admin', component: AdminComponent }
  ]
});

const vm = new Vue({
 
  data: {
    authenticated: false,
    administrator: false,

    genericMessage: "hello from the parent",

    mockAccount: {
      username: "user",
      password: "password"
    },

    user: [],

    //currentUser: {},

    toastmessage: "Login failed!"
  },

  created: function() {
    // do a session check and set authenticated to true if the session still exists
    // if the cached user exists, then just navigate to their user home page

    // the localstorage session will persist until logout

    // if (localStorage.getItem("cachedUser")) {
    //   let user = JSON.parse(localStorage.getItem("cachedUser"));
    //   this.authenticated = true;
    //   // params not setting properly, so this route needs to be debugged a bit...
    //   this.$router.push({ name: "home", params: { currentuser: user }});
    // } else {
    //   this.$router.push({ path: "/main"} );
    // }    
  },

  methods: {
    setAuthenticated(status, data) {
      this.authenticated = status;
      this.user = data;
    },

    popError(errorMsg) {
      // set the error message string and show the toast notification
      this.toastmessage = errorMsg;
      $('.toast').toast('show');
    },

    logout() {
      // delete local session
      if (localStorage.getItem("cachedUser")) {
        localStorage.removeItem("cachedUser");
      }
      // push user back to login page
      this.$router.push({ path: "/login" });
      this.authenticated = false;
      
      
    }
  },

  router: router
}).$mount("#app");

// router.beforeEach((to, from, next) => {
//   console.log('router guard fired!', to, from, vm.authenticated);

//   if (vm.authenticated == false) {
//     next("/login");
//   } else {
//     next();
//   }
// });