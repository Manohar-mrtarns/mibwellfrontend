import { NavLink } from "react-router-dom"
import "../style/contact.css"

const ContactPage = () => {
    return (
        <>
       <header className="main-header">
            <div className="logo">
                <i className="fa-solid fa-brain"></i>
                <span>MindWell Campus</span>
            </div>
            <nav className="main-nav">
                <ul>
                    <li><NavLink to={"/home"} >Home</NavLink></li>
                    <li><NavLink to={"/article"}>Article</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    <li><NavLink to={"/signup"}>Signup</NavLink></li>
                </ul>
            </nav>
            <NavLink to={"/login"} className="header-actions" style={{height:"100%",width:"100px",backgroundColor:"#00e6f6",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",textDecoration:"none"}}>
                Login
            </NavLink>
        </header>
        <div className="contact-main-con" style={{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div class="contact-container">
        <div class="contact-info" style={{color:"balck"}}>
            <h2>Get In Touch With Us</h2>
            <p>Have a question about my services or want to work together? I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Contact me anytime!</p>
            <div class="info" style={{color:"balck"}}>
                <div class="location">
                    <span class="icon" style={{color:"balck"}}>&#127970;</span>
                    <p style={{color:"balck"}}>99 S.T. Jomblo Park Pekanbaru, 28292. Indonesia</p>
                </div>
                <div class="phone">
                    <span class="icon" style={{color:"balck"}}>&#128222;</span>
                    <p style={{color:"balck"}}>(+62)81 414 257 9980</p>
                </div>
                <div class="email">
                    <span class="icon" style={{color:"balck"}}>&#9993;</span>
                    <p style={{color:"balck"}}>info@yourdomain.com</p>
                </div>
            </div>
        </div>
        
        <div class="contact-form">
            <h2>Contact Form</h2>
            <form>
                <input type="text" name="name" placeholder="Your Name" required/>
                <input type="email" name="email" placeholder="Your Email" required/>
                <input type="tel" name="phone" placeholder="Your Phone" required/>
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit" class="btn">Send Message</button>
            </form>
        </div>
    </div>
    </div>


        </>
    )
}

export default ContactPage