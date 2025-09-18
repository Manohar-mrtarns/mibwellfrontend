import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { BackendContext } from "../providers/BackendProvider";
import { toast, ToastContainer } from "react-toastify";

const LoginPage = () => {
    const navigate = useNavigate();


    const [userData, setUserData] = useState({

        email: "",
        password: ""
    })

    const { onHandleToStoreTokenInLS } = useContext(BackendContext);

    const onHandlelogin = async (e) => {
        e.preventDefault(); // default reload rokna
        try {
            const res = await fetch("http://localhost:3000/api/auth/login", {
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
                toast.success('Login Success', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    onClose: () => {
                        navigate("/dashboard")
                    }
                });
                onHandleToStoreTokenInLS(data.token)
                setUserData({
                    email: "",
                    password: ""
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

            <header className="header">
                <a href="#" className="logo">
                    <i className="fa-solid fa-brain logo-icon"></i>
                    <h2>MindWell Campus</h2>
                </a>

                <nav className="header-nav">
                    <ul>
                        {/* <li><a href="#">Support</a></li>
                <li><a href="#">Resources</a></li> */}
                        <li><a href="#" className="user-icon"><i className="fa-solid fa-user"></i></a></li>
                    </ul>
                </nav>
            </header>

            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Welcome Back User</h1>

            <main className="main-container">


                <div className="form-card">
                    <h2>Create Your Account</h2>
                    <form action="#" method="POST">
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="confirmEmail">Email</label>
                                <input value={userData.email} onChange={(e) => setUserData((pre) => ({ ...pre, email: e.target.value }))} type="email" id="confirmEmail" placeholder="Enter Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="createPassword">Enter Password</label>
                                <input value={userData.password} onChange={(e) => setUserData((pre) => ({ ...pre, password: e.target.value }))} type="password" id="createPassword" placeholder="Enter Password" required />
                            </div>

                        </div>

                        <div className="forgot-password">
                            <a href="#">Forgot Password?</a>
                        </div>

                        <div className="terms-checkbox">
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms">I agree to the MindWell <a href="#">Terms & Privacy</a></label>
                        </div>

                        <button onClick={onHandlelogin} className="sign-up-button">Login</button>
                    </form>

                    <div className="or-divider">Or</div>

                    <div className="social-login">
                        <div className="social-button"><i className="fab fa-google"></i></div>
                        <div className="social-button"><i className="fab fa-facebook-f"></i></div>
                    </div>

                    <p className="login-link">
                        Already have'ni an account? <NavLink to={"/signup"} href="#">Create an account</NavLink>
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

export default LoginPage