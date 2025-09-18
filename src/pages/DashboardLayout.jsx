import { NavLink, Outlet } from "react-router-dom"
import "../style/dashboard.css"

const DashBoardLayout = () => {
    return (
        <>
        <div className="container">
            <nav className="sidebar">
            <div className="sidebar-header">
                <i className="fa-solid fa-brain logo-icon"></i>
                <h1>MindWell Campus</h1>
            </div>
            <ul className="sidebar-nav">
                <li><NavLink to={"/dashboard/"} end><i className="fa-solid fa-house"></i> Home</NavLink></li>
                <li><NavLink to={"/dashboard/moodtraker"}><i className="fa-solid fa-folder-open"></i> Mood Tracker</NavLink></li>
                <li><NavLink to={"/dashboard/zenchatbot"}><i className="fa-solid fa-robot"></i> ZenBot</NavLink></li>
                <li><NavLink to={"/dashboard/articles"}><i className="fa-solid fa-book-open"></i>Article</NavLink></li>
                <li><NavLink to={"/dashboard/profile"}><i className="fa-solid fa-user"></i> Profile</NavLink></li>
            </ul>
            </nav>
            <main className="container-box-every">
            <Outlet/>
            </main>
            </div>
        </>
    )
}

export default DashBoardLayout