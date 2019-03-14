import FooterComponent from "./FooterComponent.js";
import UserListComponent from './UserListComponent.js';

export default {
    template: `
    <div>
    <div class="container">
    <div class="row">
        <div class="col-12 col-sm-6 mx-auto">
            <h2 class="editLnk text-center">Who wants to have fun today?</h2>
        </div>

    </div>

    <div class="row">

    <userlistcomponent v-for="(user, index) in userList" :currentUser="user" :key="index"></userlistcomponent>     
      
    <div class="col-12 col-sm-6 col-md-3 mx-auto">
            <div class="card-rounded mx-auto" @click="createSubUser()">
            <img src="images/addUser.png" alt="Add User Png">
            </div>
        </div>     
    </div>
</div>
    <footercomponent></footercomponent>
</div>
     `,
 
     created: function() {

        this.fetchAllUsers();
      },
  
      data() {
        return {
          userList: []
        }
      },
  
      methods: {
        createSubUser(){
          this.$router.push({ name: "create", params: { userLoggedin: true } });
        },
        fetchAllUsers() {
          let userid = localStorage.getItem("currentUserID");
          let url = `./admin/scripts/users.php?allusers=${userid}`;
  
          fetch(url)
            .then(res => res.json())
            .then(data => {this.userList = data})
          .catch(function(error) {
            console.error(error);
          });
        }
      },
  
    components: {
        footercomponent: FooterComponent,
        userlistcomponent: UserListComponent
      }
 }