const MoodTrackerPage = () => {
    return (
        <>
         <section className="card mood-tracker">
                <h2>How are you feeling right now?</h2>
                <div className="emoji-selector">
                    <span>😊</span>
                    <span>😐</span>
                    <span>😟</span>
                    <span>😌</span>
                    <span>😠</span>
                    <span>🥳</span>
                </div>
                <div className="quick-actions">
                    <button className="btn"><i className="fa-solid fa-plus"></i> Add Activity</button>
                    <button className="btn"><i className="fa-solid fa-pencil"></i> Write a Quick Note...</button>
                </div>
            </section>

            <section className="card mood-trends">
                <div className="card-header">
                    <h2>Monthly Mood Trends</h2>
                    <button className="filter-btn">Filter by Emotion: Week <i className="fa-solid fa-chevron-down"></i></button>
                </div>
                <div className="graph-container">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="xMidYMid meet">
                        <text x="0" y="20" font-size="10" fill="#aaa">100</text>
                        <text x="0" y="80" font-size="10" fill="#aaa">50</text>
                        <text x="0" y="140" font-size="10" fill="#aaa">0</text>
                        <text x="50" y="150" font-size="10" fill="#aaa">02</text>
                        <text x="110" y="150" font-size="10" fill="#aaa">04</text>
                        <text x="170" y="150" font-size="10" fill="#aaa">06</text>
                        <text x="230" y="150" font-size="10" fill="#aaa">08</text>
                        <text x="290" y="150" font-size="10" fill="#aaa">10</text>
                        <text x="350" y="150" font-size="10" fill="#aaa">12</text>
                        <text x="410" y="150" font-size="10" fill="#aaa">14</text>
                        <text x="470" y="150" font-size="10" fill="#aaa">16</text>
                        <path d="M 50 80 L 110 40 L 170 80 L 230 60 L 290 90 L 350 30 L 410 20 L 470 50" stroke="var(--graph-line)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="50" cy="80" r="3" fill="var(--graph-line)"/>
                        <circle cx="110" cy="40" r="3" fill="var(--graph-line)"/>
                        <circle cx="170" cy="80" r="3" fill="var(--graph-line)"/>
                        <circle cx="230" cy="60" r="3" fill="var(--graph-line)"/>
                        <circle cx="290" cy="90" r="3" fill="var(--graph-line)"/>
                        <circle cx="350" cy="30" r="3" fill="var(--graph-line)"/>
                        <circle cx="410" cy="20" r="3" fill="var(--graph-line)"/>
                        <circle cx="410" cy="20" r="6" fill="var(--graph-line)" opacity="0.3"/>
                    </svg>
                </div>
            </section>

            <section className="card journal-history">
                <div className="card-header">
                    <h2>Journal History</h2>
                    <button className="filter-btn">Since last 1 Month <i className="fa-solid fa-chevron-down"></i></button>
                </div>
                <ul className="history-list">
                    <li className="history-item">
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
                    </li>
                </ul>
            </section>
        </>
    )
}

export default MoodTrackerPage