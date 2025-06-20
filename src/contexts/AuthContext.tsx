import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, useContext, useEffect, useState } from "react"


interface User {
  nome: string
  email: string
  // ...adicione mais se quiser
}

interface AuthContextData {
  user: User | null
  token: string | null
  isLoading: boolean
  signIn: (data: { token: string; user: User }) => Promise<void>
  signOut: () => Promise<void>
}


const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData() {
      const storedUser = await AsyncStorage.getItem('@usuario')
      const storedToken = await AsyncStorage.getItem('@token')

      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser))
        setToken(storedToken)
      }

      setIsLoading(false)
    }

    loadStorageData()
  }, [])

  async function signIn(data: { token: string; user: User }) {
    setUser(data.user)
    setToken(data.token)

    await AsyncStorage.setItem('@token', data.token)
    await AsyncStorage.setItem('@usuario', JSON.stringify(data.user))

    console.log(user)
  }



  async function signOut() {
    await AsyncStorage.removeItem('@token')
    await AsyncStorage.removeItem('@usuario')

    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}