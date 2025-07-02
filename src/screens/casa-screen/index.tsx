import { ActivityIndicator, Text, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { buscarCasaDoUsuario } from "../../services/buscar-casa-do-usuario";
import { UsuarioSemCasa } from "../usuario-sem-casa-screen";
import { UsuarioComCasa } from "../usuario-com-casa-screen";
import { Casa } from "../../types/casa";
// import { Casa } from '../../types/casa' // crie se quiser tipar

export function CasaScreen() {
  const { user } = useAuth()
  const [casa, setCasa] = useState<Casa | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function carregarCasa() {
      setIsLoading(true)
      try {
        if (user?.casas?.length) {
          // Simula um delay de 1.5s
          setTimeout(async () => {
            const dados = await buscarCasaDoUsuario()
            setCasa(dados)
            setIsLoading(false)
          }, 600)
        } else {
          setTimeout(() => {
            setCasa(null)
            setIsLoading(false)
          }, 1500)
        }
      } catch (error) {
        console.error("Erro ao buscar casa:", error)
        setCasa(null)
        setIsLoading(false)
      }
    }
    carregarCasa()
  }, [user])

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#10B981" />
        <Text style={{ marginTop: 16 }}>Carregando informações da casa...</Text>
      </View>
    )
  }

  if (!casa) {
    return <UsuarioSemCasa />
  }

  return <UsuarioComCasa />
}
