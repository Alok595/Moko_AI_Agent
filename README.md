# 🌟 Moko - Your Smart Virtual Assistant 🌟

Welcome to **Moko**, a smart virtual assistant that listens, speaks, and responds to your commands! Built using **React**, **Google Gemini AI**, and **Voice Recognition**, Moko helps you interact with the digital world in a more seamless and personal way. 🎤🗣️💻

---

## 🚀 Project Overview

Moko is a **React-based virtual assistant** powered by **Google's Gemini AI**. It listens to voice commands, converts them to text, processes them with Gemini for intelligent responses, and speaks the response back to you. Whether it's opening a website, telling the time, or fetching custom responses, Moko is designed to make your life easier.

---

## 🧑‍💻 Features

- **🎤 Voice-to-Text Recognition**  
  Use your voice to interact with Moko! Convert your speech into text and perform tasks based on voice commands.

- **🧠 AI-Powered Responses**  
  Moko uses **Google Gemini AI** to respond intelligently to queries that go beyond simple commands.

- **🔗 Web Interaction**  
  Open websites like **YouTube**, **Google**, and **Instagram** directly with voice commands.

---

## 🔑 How It Works

### 1. **Voice Recognition (Speech-to-Text)**

- Moko listens for commands via the **SpeechRecognition API**. Once you click the microphone, the assistant begins listening for commands. When recognized, the speech is converted into text and displayed on the screen.

  ```js
  let recognition = new speechRecognition();
  recognition.onresult = (e) => {
    let currentIndex = e.resultIndex;
    let transcript = e.results[currentIndex][0].transcript;
    setRecoText(transcript);
    takeCommand(transcript.toLowerCase());
  };
  ```

### 2. **Processing Commands**

- Once Moko receives the text, it checks the content for commands like opening a website or fetching time. If a command matches, Moko performs the task and speaks back the confirmation.

  ```js
  if (command.includes("open") && command.includes("youtube")) {
    window.open("https://www.youtube.com/", "_blank");
    speak("Opening Youtube..");
    setResponse(true);
    setRecoText("Opening Youtube..");
  }
  ```

### 3. **Interacting with Gemini AI**

- For complex queries, Moko sends the user input to the **Google Gemini AI model**. It then processes the response and returns intelligent answers.

  ```js
  let aiResponse = async (prompt) => {
    let text = await run(prompt); // Sending prompt to Gemini AI
    setRecoText(text); // Display AI response
    speak(text); // Speak AI response
  };
  ```

### 4. **Text-to-Speech (Response Generation)**

- The assistant converts the AI response into **speech** using the `SpeechSynthesisUtterance` API, allowing it to speak in the language and style you choose.

  ```js
  const speak = (text) => {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1.2;
    text_speak.pitch = 1;
    text_speak.lang = "hi-IN";
    window.speechSynthesis.speak(text_speak);
  };
  ```

---

## 🔄 Project Flow

1. **User Command**  
   User clicks the microphone, speaks a command, and the voice is converted to text.

2. **Command Parsing**  
   The app checks if the command is a simple action (like opening a website) or requires AI response.

3. **AI Response**  
   If the command is complex, it is sent to **Gemini AI** for processing. The response is fetched and spoken back.

4. **Voice Output**  
   Moko speaks the response and shows it as text on the screen.

---

## 🛠️ Libraries & Tools Used

- **React**: Front-end library for building the app.
- **SpeechRecognition API**: Converts speech to text.
- **SpeechSynthesisUtterance**: Converts text back to speech.
- **Google Gemini AI**: Generates AI-based responses to user queries.

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/moko.git
cd moko
```

### 2. Install Dependencies

Ensure you have **Node.js** installed, then install the project dependencies:

```bash
npm install
```

### 3. Add API Key

You'll need a **Google Gemini API key** for AI integration. Get your key from [Google Cloud](https://cloud.google.com/generative-ai) and add it to `gemini.js`:

```js
const API_KEY = "YOUR_API_KEY";
```

### 4. Run the App

Start the app locally:

```bash
npm start
```

Now visit `http://localhost:3000` in your browser to interact with Moko!

---

## 📄 Folder Structure

```
.
├── src/
│   ├── assets/           # Images and GIFs
│   ├── context/          # User context (handling states)
│   ├── gemini.js         # Interacts with Google Gemini AI
│   ├── App.jsx           # Main component
│   └── index.js          # Entry point of the application
├── public/
│   └── index.html        # Main HTML file
├── .gitignore            # Gitignore file
└── README.md             # This file!
```

---

## 🎯 Future Improvements

- Add more AI capabilities like weather updates, news, and jokes.
- Support for more languages in speech synthesis.
- Improve the user interface with animations and effects.

---

## 📚 Learn More

- **Google Gemini AI**: [Documentation](https://cloud.google.com/generative-ai)
- **Speech Recognition API**: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)

---

## 🤝 Contributing

If you want to contribute to this project, feel free to fork it, open an issue, or submit a pull request. Contributions are always welcome! 🙌

---

## 👨‍💻 Author

**Moko** was created by \*\*[Alok Ranjan] as part of an educational project to explore AI, voice recognition, and modern web development tools.

---

### ✨ Thanks for visiting Moko! ✨

---
