/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import SendReply from "views/examples/reply.js";
import Feedback from "views/examples/feedback.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
if( localStorage.getItem('userInfo') !== null 
){
  var routes = [
    
{
path: "/index",
name: "Dashboard",
icon: "ni ni-tv-2 text-primary",
component: Index,
layout: "/admin"
},
{
path: "/users",
name: "Users",
icon: "ni ni-single-02 text-blue",
component: Icons,
layout: "/admin"
},
{
path: "/Order",
name: "Orders",
icon: "ni ni-pin-3 text-orange",
component: Maps,
layout: "/admin"
},
{
path: "/user-profile",
name: "User Profile",
icon: "ni ni-single-02 text-yellow",
component: Profile,
layout: "/admin"
},
{
path: "/report",
name: "Reports",
icon: "ni ni-bullet-list-67 text-red",
component: Tables,
layout: "/admin"
},
{
path: "/feedback",
name: "Feedback",
icon: "ni ni-pin-3 text-purple",
component: Feedback,
layout: "/admin"
},



];
}
else{
  var routes=[
    {
      path: "/login",
      name: "Login",
      icon: "ni ni-key-25 text-info",
      component: Login,
      layout: "/auth"
      },
      
   
  ]
}

export default routes;
