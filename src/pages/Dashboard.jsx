import { useEffect, useState } from "react"

const DashBoardPage = () => {

    const [userData,setUserData] = useState("")

    const getuserDetails = async() => {
        const token = localStorage.getItem("token");

        if (!token) {
            console.log("No toen")
            return;
        }

      const res = await fetch("http://localhost:3000/api/auth/userDetails", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // <-- token here
      },
    })

    console.log(res)
    const data = await res.json();
    console.log(data)
    if(res.ok){
        setUserData(data)
    }
    }

    useEffect(() => {
        getuserDetails()
    }, [])

    return (
        <>

            <header className="dashboard-header">
                <div className="greeting">
                    <span className="greeting-text">Welcome, {userData.name}!</span>
                    <img src="https://i.pravatar.cc/150?u=priya" alt="User Profile Picture" className="profile-pic" />
                </div>
            </header>

            <div class="dashboard-grid">
                <section class="card feeling-card">
                    <h2>How are you feeling today?</h2>
                    <div class="feeling-options">
                        <div class="feeling-option">
                            <span>😊</span>
                            <p>Happy</p>
                        </div>
                        <div class="feeling-option">
                            <span>😐</span>
                            <p>Neutral</p>
                        </div>
                        <div class="feeling-option">
                            <span>😟</span>
                            <p>Stressed</p>
                        </div>
                        <div class="feeling-option">
                            <span>😌</span>
                            <p>Calm</p>
                        </div>
                    </div>
                </section>

                <section class="card tools-card">
                    <h2>Your Quick Tools</h2>
                    <div class="quick-tools">
                        <div class="tool">
                            <div class="tool-icon"><i class="fa-solid fa-headset"></i></div>
                            <p>Talk to ZenBot</p>
                        </div>
                        <div class="tool">
                            <div class="tool-icon"><i class="fa-solid fa-lightbulb"></i></div>
                            <p>Calm Your Mind</p>
                        </div>
                        <div class="tool">
                            <div class="tool-icon"><i class="fa-solid fa-pen-to-square"></i></div>
                            <p>Write It Down</p>
                        </div>
                        <div class="tool">
                            <div class="tool-icon"><i class="fa-solid fa-wind"></i></div>
                            <p>Breathe</p>
                        </div>
                    </div>
                </section>

                <section class="card journey-card">
                    <h2>Your Wellness Journey</h2>
                    <div class="journey-content">
                        <i class="fa-solid fa-person-running journey-icon"></i>
                        <div class="journey-text">
                            <p>Day 3 of 7: Completed!</p>
                        </div>
                    </div>
                </section>

                <section class="card recommended-card">
                    <h2>Recommended For You</h2>
                    <div class="recommendations">
                        <a href="#" class="recommendation">
                            <i class="fa-solid fa-brain recommendation-icon"></i>
                            <span class="recommendation-text">Managing Exam Anxiety</span>
                        </a>
                        <a href="#" class="recommendation">
                            <i class="fa-solid fa-person-praying recommendation-icon"></i>
                            <span class="recommendation-text">Quick Mindfulness Hacks</span>
                        </a>
                    </div>
                </section>
            </div>

        </>
    )
}

export default DashBoardPage