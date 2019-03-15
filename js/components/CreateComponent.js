import FooterComponent from "./FooterComponent.js";

export default {
    props: ['userLoggedin'],
    template: `
    <div>
    <div class="login-page">
    <h3>WELCOME!!</h3>
    
    <div class="form">
    <p v-if="userLoggedin" id="logTitle">ROKU CREATE SUB USER</p>
    <p v-else id="logTitle">ROKU CREATE MAIN USER</p>
     
    <form action="login.html" class="login-form" method="post">
        <label v-show="!userLoggedin" for="fname" class="hide">Firstname:</label>
        <input v-show="!userLoggedin" v-model="input.firstname" name="fname" type="text" placeholder="fname" />
        <label for="username" class="hide">Username</label>
        <input v-model="input.username" name="username" type="text" placeholder="username" />
        <label v-show="!userLoggedin" for="password" class="hide">Password</label>
        <input v-show="!userLoggedin" v-model="input.password" name="password" type="password" placeholder="password" />
        <label v-show="!userLoggedin" for="email" class="hide">Email</label>
        <input v-show="!userLoggedin" v-model="input.email" name="email" type="email" placeholder="email" />
        <label for="birth" class="hide">Date of Birth</label>
        <input v-model="input.birth" name="birth" type="date" placeholder="date of birth" />
        <button v-if="userLoggedin" type="submit" @click.prevent="create_user('sub')">Create User</button>
        <button v-else type="submit" @click.prevent="create_user(null)">Create User</button>    
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
                 password: "",
                 email: "",
                 birth: ""
             },
             userid:"",
             validateInput:"",
             loginMessage: "User Created! Now Login and Enjoy!"

         }
     },
 
     methods: {
        create_user(filter) {
          let userid = localStorage.getItem("currentUserID");
          if(userid){
           this.validateInput = this.input.username !== "" && this.input.birth !== "";
          }else{
            this.validateInput =this.input.firstname !== "" && this.input.username !== "" && this.input.password && this.input.email !== "" && this.input.birth !== "";
          }
            if (this.validateInput) {
            //   do fetch call
            // add to form data
              let formData = new FormData();
      
              formData.append("firstname", this.input.firstname);
              formData.append("username", this.input.username);
              formData.append("password", this.input.password);
              formData.append("email", this.input.email);
              formData.append("birth", this.input.birth);
              
              let url = (filter == null) ? `./admin/scripts/admin_createuser.php`:`./admin/scripts/admin_createuser.php?sub=${userid}`;
              fetch(url, {
                method: "POST",
                body: formData
              })
                .then(res => res.json())
                .then(data => {
                  console.log(data);
                  if (data == "User Create Failed") {
                    console.log("Creation failed, try again");
                    this.$emit("autherror", data);  
                } else {
                  if(filter == null){
                    this.$router.push({ name: "login", params: { loginMessage: this.loginMessage } });
                  }else{
                    this.$router.replace({ name: "userlists" });
                  }
                   
                  
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

// Stylize createuser.html to vue.js