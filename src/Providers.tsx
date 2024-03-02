import React from "react";

interface IProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviderProps) => {
  return <div>{children}</div>;
};

export default Providers;
