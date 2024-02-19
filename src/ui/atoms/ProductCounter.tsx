"use client";

import { useState } from "react";
import { TestServer } from "@/ui/atoms/TestServer";

export const ProductCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className="border border-slate-200 px-4"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <input readOnly value={count} className="border border-slate-200" />
      <button
        className="border border-slate-200 px-4"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <TestServer />
    </div>
  );
};
