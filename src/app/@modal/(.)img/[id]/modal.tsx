"use client";

import { useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default async function Modal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="absolute left-0 top-0 h-screen max-h-none w-screen max-w-none overflow-hidden bg-gray-900/90">
      <dialog
        ref={dialogRef}
        className="modal overflow-hidden"
        onClose={onDismiss}
      >
        {children}
      </dialog>
      {/* <button className="absolute right-4 top-4">
        <X />
      </button> */}
    </div>,
    document.getElementById("modal-root")!,
  );
}
