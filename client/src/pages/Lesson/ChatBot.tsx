import { useState } from "react";
import axios from "axios";
import { BsStars } from "react-icons/bs";
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDownOffAlt } from "react-icons/md";
import PulseLoader from "react-spinners/ClipLoader";
import { FaArrowUp } from "react-icons/fa";
 const AI_TOKEN = import.meta.env.VITE_AI_TOKEN;



const suggestedQuestions = [
  "Explain Node.Js to me as if I was a child",
  "How do I apply the information from this course to my job?",
  "Explain Node.Js",
  "Can you explain the fundamentals of Node.Js?",
];

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState<
    { from: "user" | "ai"; message: string }[]
  >([]);
  const [loading, setLoading] = useState(false);


  const sendMessage = async (userMessage?: string) => {
    const message = userMessage || input;
    if (!message) return;
  
    setChatHistory((prev) => [...prev, { from: "user", message }]);
    setInput("");
    setLoading(true); // show loader
  
    try {
      // simulate loader delay (optional, but looks nicer)
      await new Promise((res) => setTimeout(res, 1000));
  
      const res = await axios.post(
        "https://api-inference.huggingface.co/models/google/flan-t5-base",
        { inputs: message },
        {
          headers: {
            Authorization: `Bearer ${AI_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      const aiMessage = res.data[0]?.generated_text || "No response from model.";
      setChatHistory((prev) => [...prev, { from: "ai", message: aiMessage }]);
    } catch (err: any) {
      setChatHistory((prev) => [
        ...prev,
        {
          from: "ai",
          message: "Something went wrong or the model is still loading...",
        },
      ]);
    }
  
    setLoading(false);
  };
  
  return (
    <div className="flex flex-col  h-screen w-full  p-4 text-sm">
      {/* Header */}
      <div>
        {chatHistory.length === 0 && (
          <>
            <h2 className="text-base font-bold">
              Do you have any questions about this course?
            </h2>
            <p className="text-gray-500 text-xs mt-1">
              Our AI assistant may make mistakes. Verify for accuracy.{" "}
              <a href="#" className="underline text-purple-600">Terms Apply.</a>
            </p>
          </>
        )}
      </div>
  
      {/* Chat or Suggestions */}
      <div className="flex-grow overflow-auto mt-4 space-y-4 pr-1">
        {chatHistory.length === 0 ? (
          <div className="space-y-2">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q)}
                className="w-full text-left border border-gray-300 rounded-md px-3 py-2 hover:bg-[#D2CAFF] transition"
              >
                {q}
              </button>
            ))}
            
          </div>
        ) : (
          chatHistory.map((chat, i) => (
<div
  key={i}
  className={`flex items-start gap-2 ${
    chat.from === "user" ? "justify-end" : "justify-start"
  }`}
>
  {/* AI avatar icon */}
  {chat.from === "ai" && (
    <div className="w-8 h-8 flex items-center justify-center bg-purple-600 text-white rounded-full mt-1">
      <BsStars />
    </div>
  )}

  {/* Message bubble */}
  <div
    className={`rounded-xl text-lg max-w-xs whitespace-pre-wrap ${
      chat.from === "user"
        ? "bg-purple-100 text-right px-4 py-3"
        : "bg-[#F6F7F9] text-left px-4 py-2"
    }`}
  >
    <div className="flex flex-col">
      {chat.message}

      {/* 👍 👎 only for AI */}
      {chat.from === "ai" && (
        <span className="flex gap-2 pt-2">
          <MdOutlineThumbUp className="text-[#5022C3] cursor-pointer hover:bg-[#E5DEF4] rounded-sm" />
          <MdOutlineThumbDownOffAlt className="text-[#5022C3] cursor-pointer hover:bg-[#E5DEF4] rounded-sm" />
        </span>
      )}
    </div>
  </div>
</div>

          ))
        )}
        
      </div>
      {loading && (
  <div className="flex min-h-20 items-start gap-2">
    <div className="w-8 h-8 flex items-center justify-center bg-purple-600 text-white rounded-full mt-1">
      <BsStars />
    </div>
    <div className="bg-gray-100 px-4 py-3 rounded-xl max-w-xs">
      <PulseLoader size={18} color="#5022C3" />
    </div>
  </div>
)}
  
      {/* Input Section */}
      <div className="pb-40">
        <div className="flex items-center border border-gray-300 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-200 rounded-md overflow-hidden">
          <input
            type="text"
            className="flex-1 bg-white p-2 text-sm outline-none"
            placeholder="Ask a question"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={() => sendMessage()}
            className="bg-[#892DE1] hover:bg-purple-700 text-white px-4 p-4 m-1"
          >
            <FaArrowUp />
          </button>
        </div>
        <div className="mt-2 text-center text-xs text-gray-400">
          Share feedback
        </div>
      </div>
    </div>
  );
  
};

export default ChatBot;
