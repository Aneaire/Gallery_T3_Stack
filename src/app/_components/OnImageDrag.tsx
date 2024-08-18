"use client";

import React from "react";
import { toast } from "sonner";

const OnImageDrag = ({
  children,
  id,
  url,
}: {
  children: React.ReactNode;
  id: number;
  url: string;
}) => {
  const [dragging, setDragging] = React.useState(false);

  const handleDragEnd = (e: React.DragEvent) => {
    // Set dragging to false when the drag ends, regardless of where it's dropped
    setDragging(false);

    // If the drop effect is 'none', it means the item was not dropped on a valid drop zone
    if (e.dataTransfer.dropEffect === "none") {
      console.log("Dropped outside of a drop zone");
      return;
    }

    if (e.dataTransfer.dropEffect === "copy") {
      navigator.clipboard.writeText(url);
      toast("Copied to clipboard!", {
        duration: 2000,
        style: { backgroundColor: "green", color: "white" },
      });
    }
  };

  return (
    <div
      key={id}
      className="peer-[card] relative aspect-square w-40 flex-col gap-2 hover:scale-105"
      draggable
      onDrag={(e) => {
        setDragging(true);
      }}
      onDragEnd={handleDragEnd}
    >
      {children}
      {dragging && (
        <div
          className="drop-zone absolute -right-[110%] -top-[50%] mt-4 border border-dashed border-gray-400 bg-green-800 p-4"
          onDragOver={(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "copy"; // Explicitly set to "copy"
          }}
          onDrop={(e) => {
            // Optional: Handle drop logic here
            setDragging(false);
          }}
        >
          Drop here to copy url!
        </div>
      )}
    </div>
  );
};

export default OnImageDrag;
