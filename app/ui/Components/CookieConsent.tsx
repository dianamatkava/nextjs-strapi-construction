"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 text-white p-4 z-50">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 font-['Plus Jakarta Sans']">
        <div className="text-sm">
          By using our website, you agree to our{" "}
          <Link href="/termsofuse" className="underline hover:text-gray-300">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/privacypolicy" className="underline hover:text-gray-300">
            Privacy Policy
          </Link>
          . We use cookies to enhance your browsing experience.
        </div>
        <div className="flex gap-4">
          <button
            onClick={acceptConsent}
            className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
