import FooterComponent from "./FooterComponent.js";

export default {
    props: ['userinfo'],
    template: `
    <div>
    <div class="login-page">
    <h3>WELCOME!!</h3>

    <div class="form">
    <p v-if="userinfo.grade=='2'" id="logTitle">ROKU EDIT SUB USER</p>
    <p v-else id="logTitle">ROKU EDIT MAIN USER</p>
     
    <form action="login.html" class="login-form" method="post">
        <label v-show="userinfo.grade=='1'" for="fname" class="hide">Firstname:</label>
        <input v-show="userinfo.grade=='1'" v-model="input.firstname" name="fname" type="text" :placeholder="'Current fname: ' + c_userinfo.userfname" />
        <label for="username" class="hide">Username</label>
        <input v-model="input.username" name="username" type="text" :placeholder="'Current username: ' +c_userinfo.username" />
        <label v-show="userinfo.grade=='1'" for="email" class="hide">Email</label>
        <input v-show="userinfo.grade=='1'" v-model="input.email" name="email" type="email" value="gggggg" :placeholder="'Current email: ' +c_userinfo.email"  />
        <button v-if="userinfo.grade=='2'" type="submit" @click.prevent="edit_user('sub')">Edit User</button>
        <button v-else type="submit" @click.prevent="edit_user(null)">Create User</button>
        
    </form>
    
    </div>
</div>
<footercomponent></footercomponent>
</div>
     `,

     data() {
         return {
             input: {
                firstname: "",
                 username: "",
                 email: "",

             },
             c_userinfo:[],
             userid:"",
             validateInput:"",
             loginMessage: "User Created! Now Login and Enjoy!"

         }
     },
     created: function() {
       console.log(this.userinfo); 
       if(this.userinfo.grade=="1"){
        this.fetchCurrentUser(null);
       }else{
        this.fetchCurrentUser("main"); 
       }
     
   
     },
 
     methods: {

        fetchCurrentUser(grade) {
            console.log(grade)
            let userid = this.userinfo.id;
            let url = (grade == null) ?  `./admin/scripts/users.php?mainuser=${userid}`:`./admin/scripts/users.php?subuser=${userid}`;
    
            fetch(url)
              .then(res => res.json())
              .then(data => {this.c_userinfo = data;
                console.log(data);
              })
            .catch(function(error) {
              console.error(error);
            });
          },

        edit_user(filter) {
            let userid = this.userinfo.id;
        if(this.userinfo.grade=="2"){
           this.validateInput = this.input.username !== "";
          }else{
            this.validateInput =this.input.firstname !== "" && this.input.username !== "" && this.input.email !== "";
          }
            if (this.validateInput) {
              let formData = new FormData();
      
              formData.append("firstname", this.input.firstname);
              formData.append("username", this.input.username);
              formData.append("email", this.input.email);
              
              let url = (filter == null) ? `./admin/scripts/admin_edituser.php?main=${userid}`:`./admin/scripts/admin_edituser.php?sub=${userid}`;
              fetch(url, {
                method: "POST",
                body: formData
              })
                .then(res => res.json())
                .then(data => {
                  console.log(data);
                  if (data == "User edit Failed") {
                    console.log("Creation failed, try again");
                    this.$emit("autherror", data);  
                } else {
                    this.$router.replace({ name: "userlists" });

                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            } else {
             let warn = ("Fields shouldn't be blank");
              this.$emit("autherror", warn);  
            }
          }
    },
    components: {
        footercomponent: FooterComponent
      }
 }
