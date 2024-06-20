import React from "react";
interface LobyLayoutProps {
  children: React.ReactNode;
}
const layout = ({ children }: LobyLayoutProps) => {
  // return <div className="bg-[#252525]">{children}</div>;
  return <div className="bg-[#021021]">{children}</div>;
};

export default layout;
