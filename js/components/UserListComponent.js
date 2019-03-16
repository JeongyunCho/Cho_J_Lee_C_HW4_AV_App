
export default {
    props: ['currentUser'],
    template: `
  
        <div class="col-12 col-sm-6 col-md-3 mx-auto">
          <div v-on:click="navToHome()">
          <router-link :to="{ name: 'main'}" id="userlistCom">
            <div class="card-rounded" id="cardFirst">
            <img src="images/avatar.png" alt="Normal Avatar Png">
            <h2 id="hoverE" class="text-center">{{ currentUser.username }}</h2>
            <p class="editLnk text-center"><router-link :to="{ name: 'edit', params: { userinfo: currentUser }}">Edit User</router-link></p>
            </div>
        </router-link>
        </div>   
        </div>
     `,
    methods: {
        navToHome() {   
             
            if(this.currentUser.agedays>=6935){
                 localStorage.setItem("adultauthenticated", true);
               }else{
                localStorage.setItem("adultauthenticated", false);
               }
               console.log( localStorage.getItem("adultauthenticated"));
            localStorage.setItem("cachedUser", JSON.stringify(this.currentUser)); 
     
        }
    }
}