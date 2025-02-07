import { useState } from "react";
import { Globe, Lightbulb, Image, FileText, Eye, MoreHorizontal, Send } from "lucide-react";

export const ChatPage = () => {

    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(""); // Store the AI's response
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!message.trim()) return;
  
      setIsLoading(true);
      try {
        const res = await fetch("YOUR_API_ENDPOINT", { // Replace with your API endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        });
  
        if (!res.ok) {
          const errorData = await res.json(); // Try to get error details from the API
          throw new Error(`API Error: ${res.status} - ${errorData?.message || res.statusText}`);
        }
  
        const data = await res.json();
        setResponse(data.response || "No response received."); // Assuming your API returns a 'response' field
        console.log(data); // Log the full data for debugging
  
      } catch (error) {
        console.error("Error:", error);
        setResponse(`Error: ${error.message}`); // Display the error message to the user.
      } finally {
        setIsLoading(false);
        setMessage("");
      }
    };
  
    return (
      <div className="min-h-screen bg-[#030014] flex flex-col items-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#1a0a2f] to-[#310a31] z-0" />
        <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-purple-500/20" />
        <div className="absolute bottom-40 left-20 w-6 h-6 rounded-full bg-purple-500/10" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-purple-500/15" />
  
        <div className="w-full max-w-3xl space-y-8 mt-12 relative z-10">
          <h1 className="text-4xl font-bold text-center text-white">How can I help with?</h1>
  
          <div className="p-4 bg-[#1a0a2f]/50 border border-purple-500/20 backdrop-blur-sm rounded-lg"> {/* Card styling */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Prompt for your AI agent"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full pl-12 pr-12 py-6 bg-[#0f0518] border border-purple-500/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 rounded-lg" // Input styling
                />
                <button // Use regular button elements
                  type="button"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white hover:bg-purple-500/20 rounded-full p-2" // Button styling
                >
                  <Globe className="h-5 w-5" />
                </button>
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white hover:bg-purple-500/20 rounded-full p-2" // Button styling
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
  
          <div className="flex flex-wrap gap-2 justify-center"> {/* Button group styling */}
            {[Image, FileText, Lightbulb, Eye, MoreHorizontal].map((Icon, index) => (
              <button
                key={index}
                className="bg-[#1a0a2f]/50 border border-purple-500/20 text-gray-300 hover:text-white hover:bg-purple-500/20 backdrop-blur-sm rounded-lg px-4 py-2" // Button styling
              >
                <Icon className="mr-2 h-4 w-4" />
                {/* You can add text to the buttons here if needed */}
                {index === 0 && "Automate post"}
                {index === 1 && "Summarize Text"}
                {index === 2 && "R & D"}
                {index === 3 && "Market Analyzer"}
                {index === 4 && "More"}
  
              </button>
            ))}
          </div>
  
          {isLoading && <div className="text-center text-purple-300">Agent is getting generated .</div>}
          {response && <div className="mt-4 text-white">{response}</div>} {/* Display the response */}
  
        </div>
      </div>
    );

}
