"use client";

import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../lib/utils";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted!");
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8">
    {/* <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white/10 backdrop-blur-md p-4 md:rounded-2xl md:p-8 dark:bg-white/5"> */}
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Contact Me
      </h2>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        Got a project or question? Drop me a message below.
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name" className="text-left md:text-left">Name</Label>
          <Input id="name" placeholder="Your Name" type="text" required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-left md:text-left">Email</Label>
          <Input id="email" placeholder="you@example.com" type="email" required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="message" className="text-left md:text-left">Message</Label>
          <Input id="message" placeholder="Your message..." type="text" required />
        </LabelInputContainer>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send Message →
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

export default ContactForm;
