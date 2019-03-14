import FooterComponent from "./FooterComponent.js";


export default {
    template: `
    <div>  
    <div class="login-page">
    <h3>WELCOME!!</h3>
    
    <div class="form">
    
    <P id="logTitle">ROKU LOGIN</P>
     
    <form action="login.html" class="login-form" method="post">
        <label for="username" class="hide">Username:</label>
        <input v-model="input.username" type="text" placeholder="username"/>
        <label for="password" class="hide">Password</label>
        <input v-model="input.password" type="password" placeholder="password"/>
        <button v-on:click.prevent="login()" type="submit">login</button>
        <p class="message">You Need Account? <router-link :to="{ name: 'create'}">Create User Here</router-link></p>

    </form>
    
    </div>
  
    </div>
    <footercomponent></footercomponent>
</div>
     `,
 
     data() {
         return {
             input: {
                 username: "",
                 password: ""
             },
             currentdate:""
          
         }
     },
     created: function() {

   
            let today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            if(dd<10) {
                dd = '0'+dd
            } 
            if(mm<10) {
                mm = '0'+mm
            } 
            today = mm + '-' + dd + '-' + yyyy;
      this.currentdate = today;
   
     },
     methods: {
       
         login() {
            //console.log(this.$parent.mockAccount.username);
 
            if(this.input.username != "" && this.input.password != "") {
            // fetch the user from the DB
            // generate the form data
            let formData = new FormData();

             formData.append("username", this.input.username);
             formData.append("password", this.input.password);

             let url = `./admin/scripts/admin_login.php`;
 
             fetch(url, {
                    method: 'POST',
                    body: formData
                })
                 .then(res => res.json())
                 .then(data => {
                    if (typeof data != "object") { // means that we're not getting a user object back
                        console.warn(data);
                        console.error("authentication failed, please try again");
                        this.$emit("autherror", data);
                    } else {
                       
                        if(data.user_agedays>=6935){
                        this.$emit("adultauthenticated", true);
                        }
                        this.$emit("authenticated", true,data[0]);
                        
                        this.$router.replace({ name: "userlists" });
                    }
                })
             .catch(function(error) { 
                 console.log(error);
             });
        } else {
                 console.log("A username and password must be present");
            }
        }
    },
    components: {
        footercomponent: FooterComponent
      }
 }