import { NavLink, useNavigate } from "react-router-dom"
import "../style/signup.css"
import { useCallback, useContext, useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import { BackendContext } from "../providers/BackendProvider";

const SignUpPage = () => {

    const navigate = useNavigate();


    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        phoneno: ""
    })

    const { onHandleToStoreTokenInLS } = useContext(BackendContext);

    const onHandleSignup = async (e) => {
        e.preventDefault(); // default reload rokna
        try {
            const res = await fetch("http://localhost:3000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            console.log(res)
            const data = await res.json();
            console.log(data)
            if (res.ok) {
                toast.success('Register Success', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    onClose: () => {
                        navigate("/dashboard/moodtraker")
                    }
                });
                onHandleToStoreTokenInLS(data.token)
                setUserData({
                    name: "",
                    email: "",
                    password: "",
                    phoneno: ""
                })

            } else {
                toast.error(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }


            console.log("✅ Server Response:", data);
        } catch (error) {
            console.error("❌ Error:", error);
        }
    }


    return (
        <>

            <header className="header" style={{height:"3rem",width:"100%",backgroundColor:"#F0F8F7",marginBottom:"10px"}}>
                <a href="#" className="logo">
                    <i className="fa-solid fa-brain logo-icon"></i>
                    <h2>MindWell Campus</h2>
                </a>

                <nav className="header-nav">
                    <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#" className="user-icon"><i className="fa-solid fa-user"></i></a></li>
                    </ul>
                </nav>
            </header>

            <main className="main-container">


                <div className="form-card">
                    <h2>Create Your Account</h2>
                    <form action="#" method="POST">
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input value={userData.name} onChange={(e) => setUserData((pre) => ({ ...pre, name: e.target.value }))} type="text" id="fullName" placeholder="Full Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Phone no">Phone no</label>
                                <input value={userData.phoneno} onChange={(e) => setUserData((pre) => ({ ...pre, phoneno: e.target.value }))} type="Phone no" id="password" placeholder="Phone no" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="createPassword">Enter Password</label>
                                <input value={userData.password} onChange={(e) => setUserData((pre) => ({ ...pre, password: e.target.value }))} type="password" id="createPassword" placeholder="Enter Password" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmEmail">Email</label>
                                <input value={userData.email} onChange={(e) => setUserData((pre) => ({ ...pre, email: e.target.value }))} type="email" id="confirmEmail" placeholder="Enter Email" required />
                            </div>
                        </div>

                        <div className="forgot-password">
                            <a href="#">Forgot Password?</a>
                        </div>

                        <div className="terms-checkbox">
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms">I agree to the MindWell <a href="#">Terms & Privacy</a></label>
                        </div>

                        <button onClick={onHandleSignup} type="submit" className="sign-up-button">Sign Up</button>
                    </form>

                    <div className="or-divider">Or</div>

                    <div className="social-login">
                        <div className="social-button"><i className="fab fa-google"></i></div>
                        <div className="social-button"><i className="fab fa-facebook-f"></i></div>
                    </div>

                    <p className="login-link">
                        Already have an account? <NavLink to={"/login"} href="#">Log In to Existing Account</NavLink>
                    </p>
                </div>

            </main>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}

export default SignUpPage