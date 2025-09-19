import { NavLink } from "react-router-dom"
// import "../style/homearticle.css"
import styles from "../style/homearticle.module.css";

const HomeArticlePage = () => {
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
                <NavLink to={"/login"} className="header-actions" style={{ height: "100%", width: "100px", backgroundColor: "#00e6f6", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", textDecoration: "none" }}>
                    Login
                </NavLink>
            </header>
            {/* Hero Section */}
            <div className="article-main" style={{ width: "100%", height: "100vh", overflow: "scroll" }}>
                <section className={styles.hero}>
                    <h1>Prioritizing Student Mental Health</h1>
                    <p>
                        Explore strategies to reduce stress, build resilience, and access the
                        right support during your academic journey.
                    </p>
                </section>

                {/* Cards Container */}
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Warning Signs</h2>
                        <p>
                            Be mindful of changes in mood, appetite, or sleep. Persistent
                            stress, sadness, or isolation may indicate the need for support.
                        </p>
                        <div className={styles.tip}>
                            💡 Tip: Talking to someone you trust is a sign of strength, not
                            weakness.
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h2>Support & Treatment</h2>
                        <p>
                            Universities often provide free counseling, peer groups, and
                            wellness workshops. Professional therapy or medication may also
                            help.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2>Self-Care Practices</h2>
                        <ul>
                            <li>Maintain a consistent sleep routine</li>
                            <li>Exercise regularly</li>
                            <li>Stay connected with friends/family</li>
                            <li>Practice mindfulness or journaling</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h2>Emergency Help</h2>
                        <p>
                            If experiencing suicidal thoughts or crisis, reach out immediately
                            to hotlines or emergency services.
                        </p>
                        <p>📞 Campus Helpline: 1800-123-456</p>
                    </div>

                    <div className={`${styles.card} ${styles.cta}`} style={{ color: "black" }}>
                        <h2>Stay Informed</h2>
                        <p>Subscribe to our wellness newsletter</p>
                        <input type="email" placeholder="Enter your email" />
                        <br />
                        <button>Subscribe</button>
                    </div>
                </div>

                {/* Footer */}
                <footer className={styles.footer}>
                    © 2025 MindCare — For educational purposes only. Not a substitute for
                    professional medical advice.
                </footer>
            </div>
        </>
    )
}

export default HomeArticlePage