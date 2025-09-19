import { NavLink } from "react-router-dom"

const ArticlePage = () => {
    return (
        <>
        <header>
                <div className="distance">
                    <i className="fa-solid fa-brain logo-icon"></i>

                    <div className="height-head">
                        <h1>MindWell Campus</h1>
                    </div>
                </div>
                <nav>
                    <NavLink to={"/home"}>Home</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/article"}>Article</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                    <NavLink to={"/signup"}>Sign up</NavLink>
                </nav>
                <NavLink to={"/login"} style={{textDecoration:"none",alignItems:"center",justifyContent:"center",display:"flex"}} className="btn-login">Login</NavLink>
            </header>
           

        </>
    )
}

export default ArticlePage