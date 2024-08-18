"use client";

const CopyBtn = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <button
      className="text-xs text-gray-200 hover:text-white"
      onClick={() => {
        navigator.clipboard.writeText(imageUrl);
      }}
    >
      Copy
    </button>
  );
};

export default CopyBtn;
