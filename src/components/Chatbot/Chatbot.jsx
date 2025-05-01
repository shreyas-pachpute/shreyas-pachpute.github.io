// src/components/Chatbot/Chatbot.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DOMPurify from 'dompurify';
import styles from './Chatbot.module.css';
import { FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import { RiChatSmile3Line } from "react-icons/ri"; // Example icon for toggle


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'assistant', text: "Hello! I'm Shreyas's AI assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]); 

  const toggleChatbot = () => setIsOpen(!isOpen);
  const closeChatbot = () => setIsOpen(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = useCallback(async () => {
    const userMessage = inputValue.trim();
    if (!userMessage) return;

    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    const ENCRYPTED_API_KEY = "sFJsy/YFhWXEQpZkSBFeAsLMFJ/FhBx6pvZiOzeGrbBB+uELbGemRBXd3hWpzsIp1wAX7IE1rOKK1pHFl2u4YCg1la5SYOUZTn1XPIdR3qhF+TEUIfs/FjmQ2jeWZ83jaAdICV+irqHFLzHQTJZY/0WHbxhmOhtsNntkr/gd5w8wpJXl9fQxjxmcTIUVKarkJJMngX4ZQL1tMoTXM1VyU67JLTyXAi7MfVhxo6e8HCqpqh9TTqOhSOUuroGHOd0xYMvk5M0cnFzSf7TYVj/RZ/vv/sY9YZQIlWdZFEAB4tgXTdFOaa2eqjQszIiCGPm7udVjhoY/X4dsN5OhO2FMrQ=="; 
    const API_ENDPOINT = 'https://shreyas-ai-fastapis.onrender.com/chat';
    // const API_ENDPOINT = 'http://127.0.0.1:8000/chat';

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': ENCRYPTED_API_KEY 
        },
        body: JSON.stringify({ message: userMessage })
      });

      if (!response.ok) {
         throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      const botResponse = data.response || 'Sorry, I encountered an issue.';

       // Sanitize the bot's response before adding
      const cleanHtml = DOMPurify.sanitize(botResponse);
       setMessages(prev => [...prev, { sender: 'assistant', text: cleanHtml, isHtml: true }]); // Mark as HTML

    } catch (error) {
      console.error("Chatbot API Error:", error);
      setMessages(prev => [...prev, { sender: 'assistant', text: 'Sorry, I encountered an error connecting to the assistant.' }]);
    } finally {
      setIsTyping(false);
    }
  }, [inputValue]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent newline on enter
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        id="chatbot-toggle"
        className={`${styles.chatbotToggle} ${isOpen ? styles.toggleActive : ''}`}
        onClick={toggleChatbot}
        aria-label="Toggle Chatbot"
      >
        <div className={styles.chatIcon}>
          <div className={styles.chatPulse}></div>
          {/* Use a suitable icon from react-icons */}
           {isOpen ? <FaTimes/> : <RiChatSmile3Line size="28px"/> }
        </div>
      </button>

      {/* Chat Window */}
       <AnimatePresence>
         {isOpen && (
            <motion.div
                className={styles.chatbot}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
             >
              <div className={styles.chatbotHeader}>
                <div className={styles.chatbotTitle}>
                  <div className={styles.animatedLogo}>
                    <div className={styles.logoParticle}></div>
                    <div className={styles.logoParticle}></div>
                    <div className={styles.logoParticle}></div>
                    <FaRobot /> {/* Robot Icon */}
                  </div>
                  <h3>AI Assistant</h3>
                </div>
                <button
                  id="chatbot-close"
                  className={styles.chatbotClose}
                  onClick={closeChatbot}
                  aria-label="Close Chatbot"
                >
                  <FaTimes />
                </button>
              </div>

              <div className={styles.chatbotMessages}>
                {messages.map((msg, index) => (
                  <motion.div
                        key={index}
                        className={`${styles.message} ${styles[msg.sender]}`} // Apply sender class
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                     >
                       {/* Conditionally render sanitized HTML or plain text */}
                        {msg.isHtml ? (
                            <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                        ) : (
                            <p>{msg.text}</p> // Wrap plain text in p tag
                        )}
                   </motion.div>
                ))}
                {isTyping && (
                  <div className={styles.typingIndicator}>
                    <div className={styles.typingDot}></div>
                    <div className={styles.typingDot}></div>
                    <div className={styles.typingDot}></div>
                  </div>
                )}
                {/* Dummy div to ensure scroll target is always at the bottom */}
                <div ref={messagesEndRef} />
              </div>

              <div className={styles.chatbotInputArea}>
                <input
                  type="text"
                  id="chatbot-input"
                  className={styles.chatbotInput}
                  placeholder="Ask me anything..."
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  disabled={isTyping}
                />
                <motion.button
                    id="chatbot-send"
                    className={styles.chatbotSend}
                    onClick={handleSendMessage}
                    disabled={isTyping || inputValue.trim() === ''}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                 >
                   <FaPaperPlane />
                </motion.button>
              </div>
            </motion.div>
         )}
       </AnimatePresence>
    </>
  );
};

export default Chatbot;