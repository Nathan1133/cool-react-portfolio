import React from "react";

function ContactForm () {
    return (
        <section id="contact" className="contact">
            <h1 class="contactMe">Contact Me</h1>
            <div class="contact">
                <div class="address">
                    <address>
                        Nathan Nitschke <br/>
                        (613) 222 3333 <br/>
                        123 Fake street <br/>
                        Ottawa, Ontario <br/>
                        <a href="n_nitschke123@hotmail.com">email@hotmail.com</a>
                    </address>
                </div>
                <div class="form">
                    <form>
                        <label for="contact-name">Name <br/> </label>
                        <input type="text" id="contact-name" placeholder="Name" />
                        <br/>
                        <label for="contact-email">Email Address <br/> </label>
                        <input type="text" id="contact-name" placeholder="example@gmail.com" />
                        <br/>
                        <label for="contact-message">Comment <br/> </label>
                        
                        <textarea id="contact-message" placeholder="Message"></textarea>
                
                        <button type="send">Send</button>
                    </form>
                </div>
            </div>
     </section>
    );
}

export default ContactForm;