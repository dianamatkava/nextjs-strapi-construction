"use client";
import React, { use, useState } from "react";
import HeaderH2 from "@/app/ui/Components/HeaderH2";
import InputLineField from "@/app/ui/Form/InputLineField";
import CTAPrimary from "@/app/ui/Components/CTAPrimary";
import { MdOutlineMail } from "react-icons/md";
import SuccessMessage from "@/app/ui/Components/SuccessMessage";

export default function FAQHeader() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);

    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formObject[key] = value as string;
    });

    try {
      const response = await fetch("/api/subscribe", {
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
    <div className="w-fit flex-col justify-center items-start gap-5 inline-flex font-['Plus Jakarta Sans']">
      <HeaderH2
        title={"Do you have any question about the service?"}
        className={"text-start"}
      />
      <div className="text-black text-sm font-normal">
        If there are question you want to ask. We will answer all you question.
        want to ask. We will answer all you question.
      </div>

      {formSubmitted ? (
        <SuccessMessage
          title="Your Message Sent Successfully"
          message="We will process your request shortly."
        />
      ) : (
        <form
          onSubmit={(e) => handleSubmitForm(e)}
          className="w-full self-stretch flex-col justify-start items-start gap-4 flex"
        >
          <div className="w-full justify-center items-center gap-2 inline-flex">
            <InputLineField
              type={"email"}
              name={"email"}
              placeholder={"example@google.com"}
            >
              <div className="z-10 absolute bottom-3.5 left-3">
                <MdOutlineMail size={19} color={"#373940"} />
              </div>
            </InputLineField>
            <CTAPrimary
              title={"Submit"}
              className={"text-white bg-bgPrimary"}
              type="submit"
              disabled={isSubmitting}
            />
          </div>
        </form>
      )}
    </div>
  );
}
