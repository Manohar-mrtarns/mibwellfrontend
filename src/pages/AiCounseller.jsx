import videoai from "../assets/aimodel.mp4"
import React, { useEffect, useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { FaMicrophone } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";

const AiCounsellerPage = () => {

  const [flag,setFlag] = useState(true)
  
  const startListing  = () => SpeechRecognition.startListening({continuous : true,language:"en-IN"})
    const { transcript, listening, resetTranscript } = useSpeechRecognition();
    const onHandleListingMode = () => {
      if(flag){
        startListing()
      }else{
        SpeechRecognition.stopListening()
      }
      setFlag(!flag)
    }

    console.log(transcript)

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <p>Browser does not support speech recognition.</p>;
  }
    return(
        <>
        <video src={videoai} style={{height:"80vh",width:"100%"}}></video>
       <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={onHandleListingMode} style={{height:"70px",width:"70px",borderRadius:"50%",backgroundColor:"#007BFF",fontSize:"24px",border:"none",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        {flag ? <FaMicrophone /> : <FaPause />}
      </button>
      {/* <button onClick={SpeechRecognition.stopListening}>
        🛑 Stop
      </button> */}
      {/* <button onClick={resetTranscript}>🔄 Reset</button> */}

      {/* <p>
        <b>Listening:</b> {listening ? "Yes 🎧" : "No"}
      </p>
      <p>
        <b>Transcript:</b> {transcript}
      </p> */}
    </div>
        </>
    )
}

export default AiCounsellerPage