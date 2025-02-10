import { useState } from "react";
import { Globe, Lightbulb, Image, FileText, Eye, MoreHorizontal, Send } from "lucide-react";

// Assuming there's an endpoint that accepts the POST request to interact with Langflow
const langFlowApiUrl = "https://api.langflow.com/run-chat"; // Replace with actual Langflow API URL

export const ChatPage = () => {
  const [message, setMessage] = useState(""); // Stores user input
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [response, setResponse] = useState(""); // Stores AI response

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    try {
      // Sending the message to Langflow API
      const result = await fetch(langFlowApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.LANGFLOW_API_KEY}`, // Use your API key here
        },
        body: JSON.stringify({ message }),
      });

      if (!result.ok) {
        throw new Error(`Error: ${result.statusText}`);
      }

      const data = await result.json();
      setResponse(data.chatOutputText || "No response received.");
    } catch (error) {
      console.error("Error:", error);
      setResponse(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
      setMessage(""); // Clears input after sending
    }
  };

  return (
    <div className="min-h-screen bg-[#030014] flex flex-col items-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#1a0a2f] to-[#310a31] z-0" />
      <div className="w-full max-w-3xl space-y-8 mt-12 relative z-10">
        <h1 className="text-4xl font-bold text-center text-white">How can I help with?</h1>

        <div className="p-4 bg-[#1a0a2f]/50 border border-purple-500/20 backdrop-blur-sm rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Prompt for your AI agent"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full pl-12 pr-12 py-6 bg-[#0f0518] border border-purple-500/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 rounded-lg"
              />
              <button
                type="button"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white hover:bg-purple-500/20 rounded-full p-2"
              >
                <Globe className="h-5 w-5" />
              </button>
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white hover:bg-purple-500/20 rounded-full p-2"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {[Image, FileText, Lightbulb, Eye, MoreHorizontal].map((Icon, index) => (
            <button
              key={index}
              className="bg-[#1a0a2f]/50 border border-purple-500/20 text-gray-300 hover:text-white hover:bg-purple-500/20 backdrop-blur-sm rounded-lg px-4 py-2"
            >
              <Icon className="mr-2 h-4 w-4" />
              {index === 0 && "Automate post"}
              {index === 1 && "Summarize Text"}
              {index === 2 && "R & D"}
              {index === 3 && "Market Analyzer"}
              {index === 4 && "More"}
            </button>
          ))}
        </div>

        {isLoading && <div className="text-center text-purple-300">Agent is generating a response...</div>}
        {response && <div className="mt-4 text-white">{response}</div>}
      </div>
    </div>
  );
};
