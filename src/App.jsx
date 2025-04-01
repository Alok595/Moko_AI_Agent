import React, { useContext } from "react";
import "./App.css";
import va from "./assets/moko3.png";
import { FaMicrophoneAlt } from "react-icons/fa";
import { dataContext } from "./context/UserContext";
import speakGif from "./assets/speak.gif";
import aigif from "./assets/aiVoice.gif";
const App = () => {
  let { recognition, speaking, setSpeaking, recoText, setRecoText, response,setResponse } =
    useContext(dataContext);

  return (
    <div className="main">
      <img id="moko" src={va} alt="virtualAssistant" />
      <span>I'm Moko, Your Advanced Virtual Assistant</span>
      {!speaking ? (
        <button
          onClick={() => {
            setRecoText("listening...")
            setSpeaking(true);
            setResponse(false)
            recognition.start();
          }}
        >
          Click Here <span id="icon"><FaMicrophoneAlt /></span>
        </button>
      ) : (
        <div className="responsediv">
          {!response ? (
            <img id="speak" src={speakGif} alt="" />
          ) : (
            <img id="aigif" src={aigif} alt="" />
          )}

          <p>{recoText}</p>
        </div>
      )}
    </div>
  );
};

export default App;
