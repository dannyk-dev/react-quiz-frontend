import { useEffect, useState } from "react";
import { AuthContext } from "../../context";
import { useCookies } from "react-cookie";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [cookies] = useCookies(["auth_token"]);

  useEffect(() => {
    if (cookies) {
      setIsAuthed(true);
    }
  }, [cookies, setIsAuthed]);

  return (
    <AuthContext.Provider value={{ isAuthed, setIsAuthed }}>
      {children}
    </AuthContext.Provider>
  );
};
