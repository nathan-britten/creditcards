import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { User } from "../types";

const defaultUser = {
  title: "",
  firstName: "",
  lastName: "",
  annualIncome: "",
  employmentStatus: "",
  houseNumber: "",
  postcode: "",
  dob: "",
};

interface UserContextType {
  user: User;
  setUser: (data: User) => void;
}

const UserContext = createContext<UserContextType>({
  user: defaultUser,
  setUser: () => null,
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser);

  const values = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export const useUserContext = () => useContext(UserContext);
