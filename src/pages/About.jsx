import { NavLink } from "react-router-dom"
import styles from "../style/about.module.css";

const AboutPage = () => {
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
         <div className="article-main" style={{ width: "100%", height: "100vh", overflow: "scroll" }}>
          <div className={styles.container}>
      <h2 className={styles.title}>🔍 Problem Overview</h2>
      <p className={styles.paragraph}>
        Students across India face increasing mental health challenges due to
        academic pressure, isolation, and lack of access to professional
        support. There's a need for a scalable, tech-enabled solution that
        offers psychological assistance in a safe and accessible way.
      </p>

      <h2 className={styles.title}>💡 Proposed Solution</h2>
      <p className={styles.paragraph}>
        We propose a digital platform that combines{" "}
        <strong className={styles.highlight}>AI-powered chat support</strong>,{" "}
        <strong className={styles.highlight}>mood tracking</strong>, and{" "}
        <strong className={styles.highlight}>virtual counseling</strong> to help
        students manage stress and seek help proactively. The system will use
        NLP to understand user queries and guide them toward appropriate
        resources or connect them with certified counselors.
      </p>

      <h2 className={styles.title}>🧠 Key Features</h2>
      <ul className={styles.list}>
        <li>AI Chatbot for 24/7 mental health support</li>
        <li>Emotion detection using sentiment analysis</li>
        <li>Anonymous peer support forum</li>
        <li>Appointment booking with licensed counselors</li>
        <li>Emergency alert system for high-risk cases</li>
      </ul>

      <h2 className={styles.title}>📱 Technology Stack</h2>
      <ul className={styles.list}>
        <li>Frontend: React Native (for mobile), HTML/CSS (for web)</li>
        <li>Backend: Node.js + Express</li>
        <li>AI/NLP: Python + TensorFlow + HuggingFace</li>
        <li>Database: MongoDB</li>
        <li>Integration: Twilio (chat), Firebase (auth), Google Calendar (appointments)</li>
      </ul>

      <h2 className={styles.title}>🌍 Social Impact</h2>
      <p className={styles.paragraph}>
        This platform will empower students to seek help without stigma, reduce
        suicide rates, and promote mental wellness in educational institutions.
        It aligns with national goals for youth well-being and digital health
        innovation.
      </p>
    </div>
    </div>
        </>
    )
}

export default AboutPage