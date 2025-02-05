"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Mail, MailX, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function Unsubscribe() {
  const [status, setStatus] = useState<
    "confirm" | "processing" | "unsubscribed"
  >("confirm");
  const searchParams = useSearchParams();

  const handleUnsubscribe = async () => {
    setStatus("processing");
    try {
      const response = await fetch(`/api/waitlist/remove/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: searchParams.get("id") || "",
          token: searchParams.get("token") || "",
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      setStatus("unsubscribed");
    } catch (error) {
      console.error(error);
      setStatus("confirm");
      return;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#FF7F50] via-[#FF69B4] to-[#9370DB] text-white">
      <div className="container px-4 py-16 flex flex-col items-center text-center space-y-8">
        <div className="relative">
          {status === "confirm" && (
            <Mail className="w-16 h-16 md:w-24 md:h-24" />
          )}
          {status === "processing" && (
            <Loader2 className="w-16 h-16 md:w-24 md:h-24 animate-spin" />
          )}
          {status === "unsubscribed" && (
            <MailX className="w-16 h-16 md:w-24 md:h-24" />
          )}
          <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-300 animate-pulse" />
        </div>

        <div className="space-y-4 max-w-[600px]">
          <h2 className="text-3xl md:text-4xl font-semibold">
            {status === "confirm" && "Are you sure?"}
            {status === "processing" && "Processing..."}
            {status === "unsubscribed" && "You've Been Unsubscribed"}
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            {status === "confirm" &&
              "You're about to unsubscribe from our exciting Truth or Dare content. This action cannot be undone. Are you sure you want to miss out?"}
            {status === "processing" &&
              "Please wait while we process your request..."}
            {status === "unsubscribed" &&
              "We're sad to see you go, but we respect your decision. You've been successfully unsubscribed and your email has been removed from our list."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          {status === "confirm" && (
            <>
              <Button
                size="lg"
                onClick={handleUnsubscribe}
                className="bg-white text-pink-600 hover:bg-white/90 font-semibold px-8"
              >
                Yes, Unsubscribe
              </Button>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-white/10 font-semibold px-8"
                >
                  No, Keep Me Subscribed
                </Button>
              </Link>
            </>
          )}
          {status === "unsubscribed" && (
            <Link href="/">
              <Button
                size="lg"
                className="bg-white text-pink-600 hover:bg-white/90 font-semibold px-8"
              >
                Back to Home
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
