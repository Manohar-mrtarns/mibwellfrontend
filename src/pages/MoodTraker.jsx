import { useContext, useEffect, useState } from "react"
import { BackendContext } from "../providers/BackendProvider"
import { toast, ToastContainer } from "react-toastify"
import Chart from 'chart.js/auto';
// import { useEffect, useState } from "react"
import image from "../assets/image.png"
// import React, { useState } from "react";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useNavigate, useNavigation } from "react-router-dom";


ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    Filler
);

const MoodTrackerPage = () => {

    const inputs = {
        min: 0,
        max: 100,
        count: 10,
        decimals: 2,
        continuity: 1,
    };

    const navigation = useNavigate()
    const [userMoodData, setUserModdData] = useState([]);

    // Dummy label generator
    const generateLabels = () =>
        Array.from({ length: inputs.count }, (_, i) => `Label ${i + 1}`);

    // Dummy data generator
    const generateData = () =>
        Array.from({ length: inputs.count }, () =>
            (Math.random() * (inputs.max - inputs.min) + inputs.min).toFixed(2)
        );

    const [data, setData] = useState({
        labels: generateLabels(),
        datasets: [
            {
                label: "Dataset",
                data: generateData(),
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.3)",
                fill: false,
            },
        ],
    });

    const [smooth, setSmooth] = useState(false);

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `Fill: ${data.datasets[0].fill}`,
            },
        },
        interaction: { intersect: false },
        elements: { line: { tension: smooth ? 0.4 : 0 } },
    };

    // Actions
    const handleAction = (type) => {
        const newData = { ...data };
        if (type === "false") newData.datasets[0].fill = false;
        if (type === "origin") newData.datasets[0].fill = "origin";
        if (type === "start") newData.datasets[0].fill = "start";
        if (type === "end") newData.datasets[0].fill = "end";
        if (type === "random") newData.datasets[0].data = generateData();
        if (type === "smooth") setSmooth(!smooth);
        setData(newData);
    };


    const [moodData, setMoodData] = useState({
        mood: "",
        note: ""
    })

    const { token } = useContext(BackendContext)

    const onHandleToSendMoodData = async () => {
        //  e.preventDefault(); // default reload rokna
        const token = localStorage.getItem("token");
        try {
            const res = await fetch("http://localhost:3000/api/mood", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(moodData),
            });
            console.log(res)
            const data = await res.json();
            console.log(data)
            if (res.ok) {
                toast.success('Data Save Success', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",

                });
                setMoodData(
                    {
                        mood: "",
                        note: ""
                    }
                )


            }
            //  else {
            //     toast.error(data.message, {
            //         position: "top-right",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: false,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //         theme: "colored",
            //     });
            // }


            console.log("✅ Server Response:", data);
        } catch (error) {
            console.error("❌ Error:", error);
        }
    }

    const onHandleMoodDataFetch = async () => {
        const token = localStorage.getItem("token");
        try {
            const res = await fetch("http://localhost:3000/api/mood/history", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });
            console.log(res)
            const data = await res.json();
            console.log(data)
            setUserModdData(data)

            console.log("✅ Server Response:", data);
        } catch (error) {
            console.error("❌ Error:", error);
        }
    }


    useEffect(() => {
        onHandleMoodDataFetch()
    }, [])

     const [userData,setUserData] = useState("")
    const [mood,setMood] = useState(0)

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

    const onHandleToLogout = () => {
        localStorage.removeItem("token")
        navigation("/home")
    }


    return (
        <>


            <header className="dashboard-header" style={{position:"static"}}>
                <div className="greeting">
                    <span className="greeting-text" style={{color:"black"}}>Welcome, {userData.name}!</span>
                    <img src={image} alt="User Profile Picture" className="profile-pic" /> 
                    <div className="logout" style={{color:"black",cursor:"pointer"}} onClick={onHandleToLogout}>Logout</div>

                </div>
            </header>
            <section className="card mood-tracker">
                <h2>How are you feeling right now?</h2>
                <div className="emoji-selector">
                    <span onClick={() => setMoodData((pre => ({ ...pre, mood: "😊" })))}>😊</span>
                    <span onClick={() => setMoodData((pre => ({ ...pre, mood: "😐" })))}>😐</span>
                    <span onClick={() => setMoodData((pre => ({ ...pre, mood: "😟" })))}>😟</span>
                    <span onClick={() => setMoodData((pre => ({ ...pre, mood: "😌" })))}>😌</span>
                    <span onClick={() => setMoodData((pre => ({ ...pre, mood: "😠" })))}>😠</span>
                    <span onClick={() => setMoodData((pre => ({ ...pre, mood: "🥳" })))}>🥳</span>
                </div>
                <div className="quick-actions">
                    <button className="btn" onClick={onHandleToSendMoodData} style={{color:"black"}}> <i className="fa-solid fa-plus"></i> Add Activity</button>
                    <input value={moodData.note} onChange={(e) => setMoodData((pre) => ({ ...pre, note: e.target.value }))} className="btn" placeholder="Write your notes..."></input>
                </div>
            </section>

            <section className="card mood-trends">
                <div className="card-header">
                    <h2>Monthly Mood Trends</h2>
                    <button className="filter-btn">Filter by Emotion: Week <i className="fa-solid fa-chevron-down"></i></button>
                </div>
                <div className="graph-container">
                    {/* <svg viewBox="0 0 500 150" preserveAspectRatio="xMidYMid meet">
                        <text x="0" y="20" fontSize="10" fill="#aaa">100</text>
                        <text x="0" y="80" fontSize="10" fill="#aaa">50</text>
                        <text x="0" y="140" fontSize="10" fill="#aaa">0</text>
                        <text x="50" y="150" fontSize="10" fill="#aaa">02</text>
                        <text x="110" y="150" fontSize="10" fill="#aaa">04</text>
                        <text x="170" y="150" fontSize="10" fill="#aaa">06</text>
                        <text x="230" y="150" fontSize="10" fill="#aaa">08</text>
                        <text x="290" y="150" fontSize="10" fill="#aaa">10</text>
                        <text x="350" y="150" fontSize="10" fill="#aaa">12</text>
                        <text x="410" y="150" fontSize="10" fill="#aaa">14</text>
                        <text x="470" y="150" fontSize="10" fill="#aaa">16</text>
                        <path d="M 50 80 L 110 40 L 170 80 L 230 60 L 290 90 L 350 30 L 410 20 L 470 50" stroke="var(--graph-line)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="50" cy="80" r="3" fill="var(--graph-line)" />
                        <circle cx="110" cy="40" r="3" fill="var(--graph-line)" />
                        <circle cx="170" cy="80" r="3" fill="var(--graph-line)" />
                        <circle cx="230" cy="60" r="3" fill="var(--graph-line)" />
                        <circle cx="290" cy="90" r="3" fill="var(--graph-line)" />
                        <circle cx="350" cy="30" r="3" fill="var(--graph-line)" />
                        <circle cx="410" cy="20" r="3" fill="var(--graph-line)" />
                        <circle cx="410" cy="20" r="6" fill="var(--graph-line)" opacity="0.3" />
                    </svg> */}
                    <Line data={data} options={options} />
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

            <section className="card journal-history">
                <div className="card-header">
                    <h2>Journal History</h2>
                    <button className="filter-btn">Since last 1 Month <i className="fa-solid fa-chevron-down"></i></button>
                </div>
                <ul className="history-list">
                    {userMoodData.map((e) => {
                        const date = new Date(e.date)
                        return <li className="history-item">
                            <span className="emoji">{e.mood}</span>
                            <div className="history-details">
                                <p className="timestamp">{date.toLocaleDateString()}</p>
                                <p className="snippet">{e.note}</p>
                            </div>
                            <button className="btn btn-view">View full note</button>
                        </li>
                    })}
                    {/* <li className="history-item">
                        <span className="emoji">😔</span>
                        <div className="history-details">
                            <p className="timestamp">Yesterday, 2:19 PM</p>
                            <p className="snippet">Felt demotivated after the lecture. Did some breathing exercises...</p>
                        </div>
                        <button className="btn btn-view">View full note</button>
                    </li>
                    <li className="history-item">
                        <span className="emoji">😊</span>
                        <div className="history-details">
                            <p className="timestamp">Sep 13, 9:04 AM</p>
                            <p className="snippet">Had a great time with friends. Feeling really happy and connected.</p>
                        </div>
                        <button className="btn btn-view">View full note</button>
                    </li> */}
                </ul>
            </section>
            
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

export default MoodTrackerPage