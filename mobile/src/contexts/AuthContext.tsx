import { createContext, ReactNode, useState, useEffect } from "react";
import { GOOGLE_CLIENT_ID } from "@env"
import * as Google from "expo-auth-session/providers/google"
import * as AuthSession from "expo-auth-session"
import * as WebBrowser from "expo-web-browser"

WebBrowser.maybeCompleteAuthSession()

interface UserProps {
  name: string
  avatarUrl: string
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>
  isUserLoading: boolean
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps)

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>({} as UserProps)
  const [isUserLoading, setIsUserLoading] = useState(false)

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: GOOGLE_CLIENT_ID,
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ["profile", "email"]
  })

  const signIn = async () => {
    try {
      setIsUserLoading(true)
      await promptAsync()
    } catch (error) {
      console.log(error)
      throw error
    } finally {
      setIsUserLoading(false)
    }
  }

  const signInWithGoogle = async (accessToken: string) => {
    console.log("Authentication Token: ", accessToken)
  }

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.accessToken) {
      signInWithGoogle(response.authentication.accessToken)
    }
  }, [response])

  return (
    <AuthContext.Provider value={{
      signIn,
      user,
      isUserLoading
    }}>
      {children}
    </AuthContext.Provider>
  )
}