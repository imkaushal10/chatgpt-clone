import { useRef, useEffect } from "react";
import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";



const ChatPage = () => {

  const endRef = useRef(null);
   
  useEffect(() => {
   endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from User</div>
          <div className="message">Test message ai</div>
          <div className="message user">Test message from User</div>
          <div ref = {endRef}/>
          <NewPrompt />
        </div>  
      </div>
    </div>
  );
};

export default ChatPage;
