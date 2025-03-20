"use client";
import CTAPrimary from "@/app/ui/Components/CTAPrimary";
import TextArea from "@/app/ui/Form/TextArea";
import { MdOutlineMail } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import InputLineField from "@/app/ui/Form/InputLineField";
import React, { useState } from "react";
import SuccessMessage from "../Components/SuccessMessage";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formObject[key] = value as string;
    });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error(errorData);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Failed to submit form: ${error.message}`);
      } else {
        console.error("An unknown error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {formSubmitted ? (
        <SuccessMessage
          title="Your Message Sent Successfully"
          message="Thank you for reaching out to us. We will process your request shortly. We will contact you shortly."
        />
      ) : (
        <form
          className="w-full h-fit flex-col justify-center items-end gap-3 inline-flex"
          onSubmit={handleFormSubmit}
        >
          <div className="w-full inline-flex gap-2">
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="name"
                className={
                  "self-stretch text-black text-xs font-bold font-['Plus Jakarta Sans'] leading-tight tracking-tight"
                }
              >
                Full Name<span className={"text-red-600 px-1"}>*</span>
              </label>
              <InputLineField
                name="name"
                placeholder={"John Doe"}
                required={true}
                inputClassName={"w-full text-[#595959] bg-slate-100 text-sm"}
              >
                <div className="z-10 absolute bottom-3 left-3">
                  <MdOutlineMail size={18} />
                </div>
              </InputLineField>
            </div>

            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="email"
                className={
                  "self-stretch text-black text-xs font-bold font-['Plus Jakarta Sans'] leading-tight tracking-tight"
                }
              >
                Email <span className={"text-red-600 px-1"}>*</span>
              </label>
              <InputLineField
                name="email"
                placeholder={"example@gmail.com"}
                required={true}
                inputClassName={"w-full text-[#595959] bg-slate-100 text-sm"}
              >
                <div className="z-10 absolute bottom-3 left-3">
                  <MdOutlineMail size={18} />
                </div>
              </InputLineField>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="phone"
              className={
                "self-stretch text-black text-xs font-bold font-['Plus Jakarta Sans'] leading-tight tracking-tight"
              }
            >
              Phone
            </label>
            <InputLineField
              name="phone"
              placeholder={"+1 234 567 890"}
              required={false}
              inputClassName={"w-full text-[#595959] bg-slate-100 text-sm"}
            >
              <div className="z-10 absolute bottom-3 left-3">
                <MdOutlineMail size={18} />
              </div>
            </InputLineField>
          </div>

          <TextArea
            name={"message"}
            label={"Enter your message"}
            placeholder={"Enter your message"}
            isRequired={false}
          >
            <LuMessageCircleMore size={18} />
          </TextArea>
          <CTAPrimary
            title={"Submit"}
            className={"text-white bg-bgPrimary"}
            type="submit"
            disabled={isSubmitting}
          />
        </form>
      )}
    </>
  );
}
