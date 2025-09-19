import "../style/splash.css"
import logo from "../assets/logo.png"
import { useEffect } from "react"

import {useNavigate} from "react-router-dom"
import 'animate.css';

const SlashPage = () => {
    
    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("token")
        setTimeout(() => {
            if(token){
                navigate("/dashboard/moodtraker")
            }else{
                navigate("/home")
                // console.log("jhvhjg")
                
            }
        },5000)
    },[])


    return (
        <>
        <div className="main-con">
           <div className="center-slash">
            <i className="fa-solid fa-brain logo-icon animate__animated animate__bounce "></i>
            <h1 style={{margin:"0px"}} className="animate__animated animate__backInRight">MindWell Campus</h1>

           </div>
           <h2 style={{color:"#777"}} className=" animate__animated animate__fadeInUpBig">Your Mental Wellness Companion</h2>
            
        </div>
        </>
    )
}

export default SlashPage