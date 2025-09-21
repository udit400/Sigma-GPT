import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import { MyContext } from "./MyContext.jsx";
import { useContext } from "react";

function ChatWindow() {
  const { prompt, setPrompt, reply, setReply, currThreadID } = useContext(MyContext);

  const getReply = async () => {
    console.log("message ", prompt, " threadId ", currThreadID);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: prompt,
        threadId: currThreadID
      })
    };

    try {
      const response = await fetch("http://localhost:8080/api/chat", options);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    // setLoading(false);
  }



  return (
    <div className="chatWindow">
      <div className="navbar">
        <span>SigmaGPT <i className="fa-solid fa-chevron-down"></i></span>
        <div className="userIconDiv" >
          <span className="userIcon"><i className="fa-solid fa-user"></i></span>
        </div>
      </div>
      <Chat />

      <div className="chatInput">
        <div className="inputBox">
          <input placeholder="Ask anything"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          // onKeyDown={(e) => e.key === 'Enter' ? getReply() : ''}
          >

          </input>
          <div id="submit" onClick={getReply}><i className="fa-solid fa-paper-plane"></i></div>
        </div>
        <p className="info">
          SigmaGPT can make mistakes. Check important info. See Cookie Preferences.
        </p>
      </div>
    </div>
  )
}

export default ChatWindow;