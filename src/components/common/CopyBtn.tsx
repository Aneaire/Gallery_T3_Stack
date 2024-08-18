"use client";

import { toast } from "sonner";

const CopyBtn = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <button
      className="text-xs text-gray-200 hover:text-white"
      onClick={() => {
        navigator.clipboard.writeText(imageUrl);
        toast("Copied to clipboard!", { style: { backgroundColor: "green" } });
      }}
    >
      Copy
    </button>
  );
};

export default CopyBtn;
