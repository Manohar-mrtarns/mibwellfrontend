import React, { useState, useRef, useEffect } from "react";
import "../style/cahtbot.css";

export default function ZenChatBoatPage() {
    const [messages, setMessages] = useState([
        { id: 1, sender: "bot", text: "Hello! I'm your AI Chatbot 🤖" },
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessage = { id: Date.now(), sender: "user", text: input };
        setMessages([...messages, newMessage]);

        setInput("");

        // code fetch start
        const token = localStorage.getItem("token");

        try {
            const res = await fetch("http://localhost:3000/api/chatbot/message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ message: input }),
            });
            console.log(res)
            const data = await res.json();
            console.log(data)

            setTimeout(() => {
                const botReply = {
                    id: Date.now() + 1,
                    sender: "bot",
                    text: data.mag,
                };
                setMessages((prev) => [...prev, botReply]);
            }, 1000);

        } catch (error) {
            console.log(error)

        }



        // code fetch end



        // Simulate bot response

    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chat-header">🤖 AI Chatbot</div>

            <div className="chat-messages">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`message ${msg.sender === "user" ? "user" : "bot"}`}
                    >
                        {msg.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="chat-input">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}


// const ZenChatBoatPage = () => {
//     return (
//         <>
//         <h1>This iZenChatBoatPage page</h1>
//         </>
//     )
// }

// export default ZenChatBoatPage