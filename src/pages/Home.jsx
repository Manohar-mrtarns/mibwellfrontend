import "../style/home.css"
import img from "../assets/logo2.png"
import { NavLink } from "react-router-dom"

const HomePage = () => {
    return (
        <>
       
    <div className="page-container">
        <header className="main-header">
            <div className="logo">
                <i className="fa-solid fa-brain"></i>
                <span>MindWell Campus</span>
            </div>
            <nav className="main-nav">
                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="header-actions">
                <i className="fa-solid fa-shopping-bag cart-icon"></i>
            </div>
        </header>

        <main className="main-content">
            <i className="fa-solid fa-cloud deco-icon deco-1"></i>
            <i className="fa-solid fa-person-praying deco-icon deco-2"></i>
            <i className="fa-solid fa-book-open deco-icon deco-3"></i>
            <i className="fa-solid fa-seedling deco-icon deco-4"></i>

            <section className="welcome-section">
                <div className="">
                    {/* <i className="fa-solid fa-brain"></i> */}
                    <img src={img} alt="" />
                </div>
                <h1>Welcome to<br/>MindWell Campus</h1>
                <p>Your Holistic Wellness Companion</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </section>

            <section className="login-section">
                <form className="login-form">
                    <NavLink to={"/login"} className="btn btn-login">Login</NavLink>
                    <NavLink to={"/signup"} className="btn btn-create">Create Account</NavLink>
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </form>
            </section>
        </main>
    </div>
        </>
    )
}

export default HomePage