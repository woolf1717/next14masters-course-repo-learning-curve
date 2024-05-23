"use client";

import { useRouter } from "next/navigation";

export const BackDropRouterBack = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="fixed top-0 left-0 w-full backdrop-blur-md h-screen "
    ></div>
  );
};
