"use client";

import React, { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

const OpenImage = ({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => {
      ref && ref.current?.click();
    }, 1000);
  }, []);

  return (
    <Dialog>
      <DialogTrigger ref={ref}>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default OpenImage;
