import { useState } from "react";

const initialMessages = [
  {
    id: 1,
    user: "Priya",
    message: "Is this available in M?",
  },
  {
    id: 2,
    user: "Host",
    message: "Yes! All sizes are available.",
  },
  {
    id: 3,
    user: "Rahul",
    message: "Looks amazing 🔥",
  },
];

function LiveChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        user: "You",
        message: text,
      },
    ]);

    setText("");
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 h-[640px] flex flex-col">

      <h2 className="text-2xl font-bold mb-4">
        Live Chat
      </h2>

      <div className="flex-1 overflow-y-auto bg-gray-100 rounded-lg p-4 space-y-4">

        {messages.map((msg) => (
          <div key={msg.id}>
            <span className="font-semibold">
              {msg.user}:
            </span>{" "}
            {msg.message}
          </div>
        ))}

      </div>

      <div className="mt-4 flex items-center gap-3 w-full">

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 min-w-0 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
        />

        <button
          onClick={sendMessage}
          className="flex-shrink-0 bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-lg"
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default LiveChat;