"use client";

import { buttonVariants } from "path/to/buttonVariants"; // Import the missing buttonVariants function
import { useEffect, useRef } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dialogRef = useRef<React.ElementRef<"dialog">>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const closeModal = (e: React.MouseEvent) => {
    e.target === dialogRef.current && router.back();
  };

  // ...

  return (
    <dialog
      ref={dialogRef}
      onClick={closeModal}
      onClose={() => router.back()}
      className="backdrop:bg-black/60 backdrop:backdrop-blur-sm-text-3xl"
    >
      <div className="p32">{children}</div>
      <button
        className="h-32  w-32 bg-yellow-400"
        onClick={() => router.back()}
      >
        ELOOO
      </button>
      <a href={"/cart"}>
        <button>przejdz do zakupów</button>
      </a>
    </dialog>
  );
};
