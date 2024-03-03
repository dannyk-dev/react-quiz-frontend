import React from "react";
import { AuthProvider } from "./components/Providers";

interface IProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviderProps) => {
  return (
    <AuthProvider>
      <div>{children}</div>
    </AuthProvider>
  );
};

export default Providers;
