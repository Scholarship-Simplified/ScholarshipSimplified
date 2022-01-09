import React from "react";
import './style.css'
import instagram from './images/instagram.png';
import mail from './images/mail.png';
const ContactUs = (props) => {
    return(
        <div class="box2">
        <div class="contact">
            <h2>CONTACT US</h2>
            <hr color="#eeeeee"/>
            <div class="center_horizontal">
            <a href="mailto:scholarshipsimplified@gmail.com"><img src={mail} class="contact_logo"/></a>
            <a href="https://www.instagram.com/scholarship_simplified"><img src={instagram} class="contact_logo"/></a>
            </div>
        </div>
        <form action="mailto:rahulvrao.ec18@rvce.edu.in" method="GET" class="form">
            <h2>FOR ENQUIRY</h2>
            <input type="text" placeholder="Name" class="inputs"/>
            <input type="text" placeholder="Age" class="inputs"/>
            <input type="tel" placeholder="Contact Number" class="inputs"/>
            <input type="email" placeholder="Mail ID" class="inputs"/>
            <input type="submit" value="Submit" class="submits"/>
        </form>
        </div>
    );
};
export default ContactUs;