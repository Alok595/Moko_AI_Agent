import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import va from "./assets/moko3.png";
import { FaMicrophoneAlt } from "react-icons/fa";
import { dataContext } from "./context/UserContext";
import speakGif from "./assets/speak.gif";
import aigif from "./assets/aiVoice.gif";
const App = () => {
  let {
    recognition,
    speaking,
    setSpeaking,
    recoText,
    setRecoText,
    response,
    setResponse,
  } = useContext(dataContext);

  // List of sentences to display
  const sentences = [
    "I'm Moko, Your  Virtual Assistant.",
    "Ask Me AnyThing",
    "Talk with me by pressing the button.",
    "Ask me to open YouTube, Instagram, or Google.",
    "Ask me for the date and time.",
  ];

  const [currentSentence, setCurrentSentence] = useState(sentences[0]);

  useEffect(() => {
    const sentenceInterval = setInterval(() => {
      setCurrentSentence((prevSentence) => {
        const currentIndex = sentences.indexOf(prevSentence);
        const nextIndex = (currentIndex + 1) % sentences.length;
        return sentences[nextIndex];
      });
    }, 2000); // Change sentence every 4 seconds

    return () => clearInterval(sentenceInterval); // Cleanup on component unmount
  }, []);

  return (
    <div className="main">
      <img id="moko" src={va} alt="virtualAssistant" />
      <span>{currentSentence}</span>
      {!speaking ? (
        <button
          onClick={() => {
            setRecoText("listening...");
            setSpeaking(true);
            setResponse(false);
            recognition.start();
          }}
        >
          Click Here{" "}
          <span id="icon">
            <FaMicrophoneAlt />
          </span>
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
