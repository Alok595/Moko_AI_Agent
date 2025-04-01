import React, { createContext, useState } from "react";
import run from "../gemini";

export const dataContext = createContext();
const UserContext = ({ children }) => {
  const [speaking, setSpeaking] = useState(false);
  const [recoText, setRecoText] = useState("listening...");
  const [response, setResponse] = useState(false);

  const speak = (text) => {
    // for text to speach
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1.4;
    text_speak.pitch = 0.7;
    text_speak.lang = "hi-IN";
    window.speechSynthesis.speak(text_speak);
  };

  let aiResponse = async (prompt) => {
    let text = await run(prompt);
    let newText =
      text.split("**") &&
      text.split("*") &&
      text.replace("google", "Alok Ranjan") &&
      text.replace("Google", "Alok Ranjan");
    setRecoText(newText);
    speak(newText);
    setResponse(true);
    setTimeout(() => {
      setSpeaking(false);
    }, 5000);
  };

  let speechRecognition =
    window.speechRecognition || window.webkitSpeechRecognition; //for voice to text

  let recognition = new speechRecognition();

  recognition.onresult = (e) => {
    let currentIndex = e.resultIndex;
    let transcript = e.results[currentIndex][0].transcript;
    setRecoText(transcript);
    takeCommand(transcript.toLowerCase());
  };
  let takeCommand = (command) => {
    if (command.includes("open") && command.includes("youtube")) {
      window.open("https://www.youtube.com/", "_blank");
      speak("Opening Youtube..");
      setResponse(true);
      setRecoText("Opening Youtube..");
      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    } else if (command.includes("open") && command.includes("google")) {
      window.open("https://www.google.com/", "_blank");
      speak("Opening Google..");
      setResponse(true);
      setRecoText("Opening Google..");
      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    } else if (command.includes("open") && command.includes("instagram")) {
      window.open("https://www.instagram.com/", "_blank");
      speak("Opening instagram..");
      setResponse(true);
      setRecoText("Opening instagram..");
      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    } else if (command.includes("time")) {
      let time = new Date().toLocaleString(undefined, {
        hour: "numeric",
        minute: "numeric",
      });
      speak(time);
      setResponse(true);
      setRecoText(time);
      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    } else if (command.includes("date")) {
      let time = new Date().toLocaleString(undefined, {
        day: "numeric",
        month: "numeric",
      });
      speak(date);
      setResponse(true);
      setRecoText(date);
      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    } else if (command.includes("who are you")) {
      let responseText = "My Name Is Moko Developed By Alok Ranjan";
      speak(responseText);
      setResponse(true);
      setRecoText(responseText);
      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    } else if (command.includes("what is your name")) {
      let responseText = "My Name Is Moko Developed By Alok Ranjan";
      speak(responseText);
      setResponse(true);
      setRecoText(responseText);
      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    } else {
      aiResponse(command);
    }
  };

  const value = {
    recognition,
    speaking,
    setSpeaking,
    recoText,
    setRecoText,
    response,
    setResponse,
  };
  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export default UserContext;
