import { type ReactNode } from "react";

export default function StaticLayout({ children }: { children: ReactNode }) {
  return <div className="text-center max-w-md mx-auto ">{children}</div>;
}
