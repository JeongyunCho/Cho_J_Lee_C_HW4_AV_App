
export default {
    props: ['currentUser'],
    template: `
        <div class="col-12 col-sm-6 col-md-3 mx-auto">
        <router-link :to="{ name: 'main'}" id="userlistCom">
            <div class="card-rounded" id="cardFirst">
            <img src="images/avatar.png" alt="Normal Avatar Png">
            <h2 id="hoverE" class="text-center">{{ currentUser.username }}</h2>
            <p class="editLnk text-center"><router-link :to="{ name: 'edit', params: { userinfo: currentUser }}">Edit User</router-link></p>
            </div>
        </router-link>
        </div>   
     `,
 
   methods: {
        navToUserHome() {            
            this.$router.push({ name: "main", params: { currentuser: this.currentUser } });
            // set a localstorage session object so that we don't have to log back in on page refresh or after our initial login
            localStorage.setItem("cachedUser", JSON.stringify(this.currentUser)); 
        }
    }
}