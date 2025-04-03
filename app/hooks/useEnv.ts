"use client";
import { useState, useEffect } from "react";
import {
  APP_SERVICE_EMAIL,
  APP_PHONE_NUMBER,
  APP_INSTAGRAM_URL,
  APP_FACEBOOK_URL,
} from "@/app/constants";

export function useEnv() {
  const [env, setEnv] = useState({
    serviceEmail: "",
    phoneNumber: "",
    instagramUrl: "",
    facebookUrl: "",
  });

  useEffect(() => {
    const values = {
      serviceEmail: APP_SERVICE_EMAIL || "",
      phoneNumber: APP_PHONE_NUMBER || "",
      instagramUrl: APP_INSTAGRAM_URL || "",
      facebookUrl: APP_FACEBOOK_URL || "",
    };
    setEnv(values);
  }, []);

  return env;
}
