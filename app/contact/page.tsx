

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


import './contact.css'


export default function Contact() {
    return (
        <div>

            <div className="contactPage">
                <div className="header">
                    <h1>Contact Us</h1>
                    <p>We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.</p>
                </div>

                <div className="contactInfo">
                    <div className="contactItem">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                        <span>Vishnupur,Bhimavaram,West Godavari,pincode:534202</span>
                    </div>
                    <div className="contactItem">
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                        Phone: 088162 50864
                    </div>
                    <div className="contactItem">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <span>info@svecw.edu.in</span>
                    </div>
                </div>

                <form className="contactForm">
                    <div className="form-item">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-item">
                        <Label htmlFor="email">Your Email</Label>
                        <Input id="email" type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-item">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" type="text" placeholder="Subject" />
                    </div>
                    <div className="form-item">
                        <Label htmlFor="message">Your Message</Label>
                        <textarea id="message" className="textarea" placeholder="Your Message" required></textarea>
                    </div>
                    <Button type="submit">Send Message</Button>
                </form>
                <div className="socialMedia">
                    <p>Follow Us on </p>
                    <span><a href="https://www.facebook.com/ShriVishnuEngineeringCollegeforWomen/"><FontAwesomeIcon icon={faFacebookF} /></a></span>
                    <span><a href="https://twitter.com/?lang=en-in"><FontAwesomeIcon icon={faTwitter} /></a></span>
                    <span><a href="https://www.linkedin.com/school/vishnusvecw/"><FontAwesomeIcon icon={faLinkedinIn} /></a></span>
                    <span><a href="https://www.instagram.com/vishnu_svecw/"><FontAwesomeIcon icon={faInstagram} /></a></span>
                </div>
            </div>
        </div>
    )
}
