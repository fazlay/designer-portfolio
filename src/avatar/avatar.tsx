import React from "react";

import { cn } from "@/utils/classNameMerge";

interface ILetterAvatarProps {
  children: React.ReactNode;
}

export const LetterAvatar: React.FC<ILetterAvatarProps> = ({ children }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-300 text-xs font-semibold text-white leading-none"
      )}
    >
      {children}
    </span>
  );
};
