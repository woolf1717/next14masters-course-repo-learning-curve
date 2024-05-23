import { BackDropRouterBack } from "@/app/@modal/(.)cart/backdropRouterBack";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackDropRouterBack />
      <div className="bg-white w-full h-full opacity-30 animate-[opacityAnimation_1s]"></div>
      <div className="h-screen shadow-xl animate-[slideIn_1s] bg-white fixed right-0 top-0 w-2/5">
        {children}
      </div>
    </>
  );
};
