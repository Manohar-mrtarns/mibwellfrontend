import "../style/splash.css"
import logo from "../assets/logo.png"
import { useEffect } from "react"

import {useNavigate} from "react-router-dom"

const SlashPage = () => {
    
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/home")
            console.log("jhvhjg")
        },25000)
    },[])


    return (
        <>
        <div className="main-con">
           
                <img src={logo} alt="" />
                <h1 className="slash-text">
                   MindWell Campus
                </h1>
                <p>Your Holistic Wellness Companion</p>
                <div className="loader"></div>
            
        </div>
        </>
    )
}

export default SlashPage