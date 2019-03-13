import HeaderComponent from "./HeaderComponent.js";
import FooterComponent from "./FooterComponent.js";

export default {
    template: `
<div>
<headercomponent :navlist="navlist"></headercomponent>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm-6 col-md-3 mx-auto">
            <div class="card-rounded">
            <img src="images/avatar.png" alt="Normal Avatar Png">
            <h2 class="text-center"> LEE</h2>
            <p class="editLnk text-center">Edit User Here</p>
            </div>
        </div>   
        <div class="col-12 col-sm-6 col-md-3 mx-auto">
            <div class="card-rounded">
            <img src="images/avatar.png" alt="Normal Avatar Png">
            <h2 class="text-center"> SAM</h2>
            <p class="editLnk text-center">Edit User Here</p>
            </div>
        </div>    
        <div class="col-12 col-sm-6 col-md-3 mx-auto">
            <div class="card-rounded">
            <img src="images/avatar.png" alt="Normal Avatar Png">
            <h2 class="text-center"> CHO</h2>
            <p class="editLnk text-center">Edit User Here</p>
            </div>
        </div>   
        <div class="col-12 col-sm-6 col-md-3 mx-auto">
            <div class="card-rounded mx-auto">
            <img src="images/addUser.png" alt="Add User Png">
            </div>
        </div>     
    </div>
</div>

<footercomponent></footercomponent>

</div>


    `,

    data() {
        return {
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
        }
    },


    methods: {

   
    },
    components: {
      headercomponent: HeaderComponent,
      footercomponent: FooterComponent
    }
}