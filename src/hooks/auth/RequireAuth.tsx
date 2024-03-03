import React from "react";
import { useAuthStore } from "../../context";
import { Navigate, useLocation } from "react-router-dom";

interface IRequireAuthProps {
  children?: React.ReactNode;
  child?: React.JSX.Element;
}

export const RequireAuth = ({ children, child }: IRequireAuthProps) => {
  const { isAuthed } = useAuthStore();
  const location = useLocation();

  return isAuthed ? (
    children ?? child
  ) : (
    <Navigate to="/register" replace state={{ path: location.pathname }} />
  );
};
