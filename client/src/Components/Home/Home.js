import Vote from '../Vote/Vote'
import React, { useState,useEffect } from "react";
import io from "socket.io-client";

const socket = io('http://localhost:8050');

const Home = () => {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('hello World');
  
    useEffect(() => {
      // Listen for messages from the server
    //   socket.on('chat message', (msg) => {
    //     setMessages((prevMessages) => [...prevMessages, msg]);
    //   });
  
      // Clean up the socket connection on component unmount
    //   return () => {
    //     socket.disconnect();
    //   };
    }, []);
  
    const sendMessage = () => {
      // Emit a message to the server
      socket.emit('chat message', newMessage);
    //   setNewMessage('');
    };
    
    return (
        <div>
            <button onClick={sendMessage}>Send</button>
            <Vote />
        </div>
    );
};

export default Home;