"use client";

import Button from "./components/Button";
import { FileText, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Capitalize component name to follow React conventions
const PdfChat = () => {
  const router = useNavigate();

  // Add error handling for navigation
  const handleSummarize = () => {
    try {
      router.push("/summary2");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  const handleChat = () => {
    try {
      router.push("/chat");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unlock the Power of Your PDFs
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  <span className="font-semibold text-gray-900">Summarize</span>{" "}
                  and <span className="font-semibold text-gray-900">chat</span>{" "}
                  with your PDF documents using advanced AI technology. Save
                  time and gain insights effortlessly.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  className="h-11 px-8 transform transition-all hover:scale-105 hover:shadow-lg bg-black hover:bg-gray-700"
                  onClick={handleSummarize}
                  aria-label="Summarize PDF"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Summarize PDF
                </Button>
                <Button
                  variant="outline"
                  className="h-11 px-8 transform transition-all hover:scale-105 hover:shadow-lg border-gray-900 text-gray-900 hover:bg-blue-50"
                  onClick={handleChat}
                  aria-label="Chat with PDF"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat with PDF
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PdfChat;
