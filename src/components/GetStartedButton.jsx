"use client";

import { ArrowRight } from "lucide-react";
import { useGetStarted } from "./GetStartedModel";

/** Button that opens the Get Started popup (contact form) from any page. */
export default function GetStartedButton({
  children = "Get Started",
  className = "btn btn-primary",
  arrowSize = 18,
  onClick,
}) {
  const { open } = useGetStarted();
  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        onClick?.(e);
        open();
      }}
    >
      {children} <ArrowRight size={arrowSize} />
    </button>
  );
}
