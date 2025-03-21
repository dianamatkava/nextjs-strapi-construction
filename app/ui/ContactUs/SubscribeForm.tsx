"use client";
import CheckBoxField from "@/app/ui/Form/CheckBoxField";
import Link from "next/link";
import SuccessBox from "@/app/ui/Form/SuccessBox";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
import InputDarkLineField from "@/app/ui/Form/InputDarkLineField";

export default function SubscribeForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    if (!formData.get("agreements")) {
      alert("Please read and agree to the Terms of Use");
      setIsSubmitting(false);
      return;
    }

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

  if (formSubmitted) {
    return (
      <SuccessBox
        title={"Your Message Sent Successfully."}
        message={"We will process your request shortly."}
      />
    );
  }

  return (
    <form
      onSubmit={(e) => handleSubmitForm(e)}
      className="self-stretch h-[86.50px] flex-col justify-start items-start gap-4 flex w-[250px]"
    >
      <div className="self-stretch justify-between items-center inline-flex w-full">
        <InputDarkLineField
          label={"Email"}
          type={"email"}
          name={"email"}
          placeholder={"example@google.com"}
          labelClassName={"text-white"}
        >
          <div className="z-0 absolute bottom-3 right-1">
            <button
              type={"submit"}
              disabled={isSubmitting}
              className="justify-start items-center gap-2 flex ml-[-55px] cursor-pointer text-black font-semibold hover:text-gray-700"
            >
              <span className="text-black">
                <LuSend width={18} />
              </span>
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </InputDarkLineField>
      </div>

      <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
        <CheckBoxField name={"agreements"}>
          <label
            htmlFor={"agreements"}
            className="cursor-pointer text-[#828181] text-xs font-normal flex gap-1"
          >
            I agree to
            <Link href={"/termsofuse"} className={"underline"}>
              Terms Of Use
            </Link>
            <span className={"text-red-600"}>*</span>
          </label>
        </CheckBoxField>
      </div>
    </form>
  );
}
