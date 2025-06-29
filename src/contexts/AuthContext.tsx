import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, useContext, useEffect, useState } from "react"
import Toast from "react-native-toast-message"


// interface User {
//   nome: string
//   email: string
//   // ...adicione mais se quiser
// }

interface AuthContextData {
  user: any | null
  token: string | null
  isLoading: boolean
  signIn: (data: { token: string; user: any }) => Promise<void>
  signOut: () => Promise<void>
  atualizarUsuario: (user: any) => void
}


const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null)
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

  function atualizarUsuario(novoUsuario: any) {
    setUser(novoUsuario)
  }

  async function signIn(data: { token: string; user: any }) {
    setUser(data.user)
    setToken(data.token)

    await AsyncStorage.setItem('@token', data.token)
    await AsyncStorage.setItem('@usuario', JSON.stringify(data.user))

    console.log(user)
    console.log(token)
    console.log('Token salvo:', await AsyncStorage.getItem('@token'))
  }



  async function signOut() {
    await AsyncStorage.removeItem('@token')
    await AsyncStorage.removeItem('@usuario')

    setUser(null)
    setToken(null)

    Toast.show({
      type: 'info',
      text1: 'Logout realizado com sucesso.',
    });
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        signIn,
        signOut,
        atualizarUsuario
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}