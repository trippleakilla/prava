import React, { FC } from "react";

type ButtonProps = {
  readonly onClick?: () => void;
  readonly href?: string;
  readonly text: string;
  readonly className: string;
  readonly asLink: boolean;
};

export default ({
  onClick,
  text = "Button",
  className = "",
  asLink = false,
  href = "",
}: ButtonProps) => {
  return asLink ? (
    <a
      href={href}
      className={`bg-gradient-to-r flex max-w-max shadow-md from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-6 py-4 text-xl rounded-md text-white transition-all duration-200 hover:scale-110 hover:shadow-2xl ${className}`}
    >
      {text}
    </a>
  ) : (
    <button
      type="button"
      className={`bg-gradient-to-r shadow-md from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-6 py-4 text-xl rounded-md text-white transition-all duration-200 hover:scale-110 hover:shadow-2xl ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
