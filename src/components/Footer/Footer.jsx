import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <div>
          
          <footer class="footer bg-dark  ps-3  text-white mt-4 p-3">
         <div class="row">
       <div class="col ms-5"> 
           <p class="text-white-50 mt-3"> <b>Swiggy</b></p>
           <li class="list-inline"><a class="text-white text-decoration-none" href="#">© 2024 Bundl</a></li>
           <li class="list-inline"><a class="text-white text-decoration-none" href="#">Technologies Pvt. Ltd</a></li>
          
       </div>
       <div class="col">
         <p class="text-white-50  mt-3"><b>Company</b></p>
         <li class="list-inline"><a class="text-white text-decoration-none" href="#">About</a></li>
         <li class="list-inline"><a class="text-white text-decoration-none" href="#">Careers</a></li>
         <li class="list-inline"><a class="text-white text-decoration-none"href="#">Team</a></li>
         <li class="list-inline"><a class="text-white text-decoration-none"href="#">Swiggy One</a></li>
         <li class="list-inline"><a class="text-white text-decoration-none"href="#">Swiggy Instamart</a></li>
         <li class="list-inline"><a class="text-white text-decoration-none"href="#">Swiggy Genie</a></li>
     </div>
     <div class="col">
       <p class="text-white-50  mt-3"><b>Contact us</b></p>
       <li class="list-inline"><a class="text-white text-decoration-none" href="#">Help & Support</a></li>
       <li class="list-inline"><a class="text-white text-decoration-none" href="#">Partner with us</a></li>
       <li class="list-inline"><a class="text-white text-decoration-none"href="#">Ride with us</a></li>
      
   </div>
   <div class="col">
     <p class="text-white-50  mt-3"><b>Legal</b></p>
       <div class="col">
         <li class="list-inline"><a class="text-white text-decoration-none" href="#">Terms & Conditions</a></li>
         <li class="list-inline"><a class="text-white text-decoration-none" href="#">Cookie Policy</a></li>
         <li class="list-inline"><a class="text-white text-decoration-none"href="#">Privacy Policy</a></li>
         <li class="list-inline"><a class="text-white text-decoration-none" href="#">Investor Relations</a></li>
        
       </div>
   </div>
   <div class="col">
     <p class="text-white-50  mt-3"><b>We deliver to:</b></p>
       <div class="col">
         <li class="list-inline"><a class="text-white text-decoration-none text-nowrap" href="#">Bangalore</a></li>
         <li class="list-inline"><a class="text-white text-decoration-none text-nowrap" href="#">Gurgaon</a></li>
         <li class="list-inline"><a class="text-white text-decoration-none text-nowrap"href="#">Hyderabad</a></li>
         <li class="list-inline"><a class="text-white text-decoration-none text-nowrap" href="#">Delhi</a></li>
         <li class="list-inline"><a class="text-white text-decoration-none text-nowrap" href="#">Mumbai</a></li>
         <li class="list-inline"><a class="text-white text-decoration-none text-nowrap"href="#">Pune ...</a></li>
       </div>
       </div>
   </div>
 </footer>

 </div>
    );
}
export default Footer;