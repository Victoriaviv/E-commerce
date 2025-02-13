import React from "react";
import"../styles/contact.css";
import map from "../assets/map.png"


 function Contact() {
  return (
    <div>
      <img src={ map } alt="map"/>
    <div className="contact-container">
    
      <div className="form-container">
        <h2>Leave Us a Message</h2>
        <form>
          <div className="form-group">
            <label>Name <span className="required">*</span></label>
            <div className="name-inputs">
              <input type="text" placeholder="First" required />
              <input type="text" placeholder="Last" required />
            </div>
          </div>
          <div className="form-group">
            <label>Email <span className="required">*</span></label>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Comment or Message</label>
            <textarea placeholder="Write your message here..."></textarea>
          </div>
          <button className="submit">Submit</button>
        </form>
      </div>

     
      <div className="sideba">
        <h2>Our Store</h2>
        <p>501-521 Fashion Ave, New York, NY 10018, USA</p>
        <p><strong>PHONE:</strong> +1 212 244 2681</p>
        <p><strong>E-MAIL:</strong> office@example.org</p>
        <h2>Store Hours</h2>
        <p>Sun: Closed</p>
        <p>Mon to Sat: 10 AM – 5:30 PM</p>
      </div>
    </div>
    </div>
  );
}
export default Contact;