export default {
    template: `
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
     `,
 
     data() {
         return {
             input: {
                 username: "",
                 password: ""
             },

         }
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
                        this.$emit("authenticated", true, data[0]);
                        this.$router.replace({ name: "users" });
                    }
                })
             .catch(function(error) { 
                 console.log(error);
             });
        } else {
                 console.log("A username and password must be present");
            }
        }
    }
 }