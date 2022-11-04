import { createContext, ReactNode } from "react";

interface UserProps {
  name: string
  avatarUrl: string
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps)

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const signIn = async () => {
    console.log("Login")
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: "John Doe",
        avatarUrl: "John Doe"
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}