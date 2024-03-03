import { Dispatch, SetStateAction, createContext, useContext } from "react";

interface IAuthContextProps {
  isAuthed: boolean;
  setIsAuthed: Dispatch<SetStateAction<boolean>> | undefined;
}

export const AuthContext = createContext<IAuthContextProps>({
  isAuthed: false,
  setIsAuthed: undefined,
});

export const useAuthStore = () => {
  return useContext(AuthContext);
};
