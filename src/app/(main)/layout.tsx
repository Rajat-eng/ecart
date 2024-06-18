import React from "react";
interface LobyLayoutProps {
  children: React.ReactNode;
}
const layout = ({ children }: LobyLayoutProps) => {
  return <div>{children}</div>;
};

export default layout;
