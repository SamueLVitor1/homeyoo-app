import { Text, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { buscarCasaDoUsuario } from "../../services/buscar-casa-do-usuario";
import { UsuarioSemCasa } from "../usuario-sem-casa-screen";
import { UsuarioComCasa } from "../usuario-com-casa-screen";

export function CasaScreen() {

  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [casa, setCasa] = useState(null)


  useEffect(() => {
    const carregarCasa = async () => {
      setIsLoading(true)

      if (user?.casas?.length > 0) {
        try {
          const idCasa = user.casas[0].house_id
          const dados = await buscarCasaDoUsuario()
          setCasa(dados)
        } catch (error) {
          console.error("Erro ao buscar casa:", error)
        }
      }
      setIsLoading(false)
    }

    carregarCasa()
  }, [user])

  return casa ? <UsuarioComCasa /> : <UsuarioSemCasa />
}