import { useState } from "react";
import axios from "axios";
import { BsStars } from "react-icons/bs";
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDownOffAlt } from "react-icons/md";
import PulseLoader from "react-spinners/ClipLoader";
import { FaArrowUp } from "react-icons/fa";
const VITE_AI_TOKEN = import.meta.env.VITE_AI_TOKEN;

const suggestedQuestions = [
  "Explain Node.Js to me as if I was a child",
  "How do I apply the information from this course to my job?",
  "Explain Node.Js",
  "Can you explain the fundamentals of Node.Js?",
];

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState<{ from: "user" | "ai"; message: string }[]>([]);
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
            Authorization: `Bearer ${VITE_AI_TOKEN}`,
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
    <div className="flex h-screen  w-full flex-col  p-4 text-sm">
      {/* Header */}
      <div>
        {chatHistory.length === 0 && (
          <>
            <h2 className="text-base font-bold">Do you have any questions about this course?</h2>
            <p className="mt-1 text-xs text-gray-500">
              Our AI assistant may make mistakes. Verify for accuracy.{" "}
              <a href="#" className="text-purple-600 underline">
                Terms Apply.
              </a>
            </p>
          </>
        )}
      </div>

      {/* Chat or Suggestions */}
      <div className="mt-4 flex-grow space-y-4 overflow-auto pr-1">
        {chatHistory.length === 0 ? (
          <div className="space-y-2">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-left transition hover:bg-[#D2CAFF]"
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
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
                  <BsStars />
                </div>
              )}

              {/* Message bubble */}
              <div
                className={`max-w-xs whitespace-pre-wrap rounded-xl text-lg ${
                  chat.from === "user"
                    ? "bg-purple-100 px-4 py-3 text-right"
                    : "bg-[#F6F7F9] px-4 py-2 text-left"
                }`}
              >
                <div className="flex flex-col">
                  {chat.message}

                  {/* 👍 👎 only for AI */}
                  {chat.from === "ai" && (
                    <span className="flex gap-2 pt-2">
                      <MdOutlineThumbUp className="cursor-pointer rounded-sm text-[#5022C3] hover:bg-[#E5DEF4]" />
                      <MdOutlineThumbDownOffAlt className="cursor-pointer rounded-sm text-[#5022C3] hover:bg-[#E5DEF4]" />
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
          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
            <BsStars />
          </div>
          <div className="max-w-xs rounded-xl bg-gray-100 px-4 py-3">
            <PulseLoader size={18} color="#5022C3" />
          </div>
        </div>
      )}

      {/* Input Section */}
      <div className="pb-40">
        <div className="flex items-center overflow-hidden rounded-md border border-gray-300 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-200">
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
            className="m-1 bg-[#892DE1] p-4 px-4 text-white hover:bg-purple-700"
          >
            <FaArrowUp />
          </button>
        </div>
        <div className="mt-2 text-center text-xs text-gray-400">Share feedback</div>
      </div>
    </div>
  );
};

export default ChatBot;
