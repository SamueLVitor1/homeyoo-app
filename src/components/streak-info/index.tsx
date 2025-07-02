import { View, Text, Image, StyleSheet } from "react-native"
import { useEffect, useState } from "react"
import { buscarPerfil } from "../../services/buscar-perfil"
import { styles } from "./styles"

export function StreakInfo() {
  const [streakAtual, setStreakAtual] = useState(0)
  const [maiorStreak, setMaiorStreak] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function buscarPerfilInfo() {
      try {
        const usuario = await buscarPerfil()
        setStreakAtual(usuario.streakAtual ?? 0)
        setMaiorStreak(usuario.maiorStreak ?? 0)
      } catch (e) {
        setStreakAtual(0)
        setMaiorStreak(0)
      } finally {
        setLoading(false)
      }
    }
    buscarPerfilInfo()
  }, [])

  const isStreak = streakAtual > 0

  if (loading) {
    return (
      <View style={[styles.container, styles.iceBg]}>
        <Text style={{ color: "#2576b7" }}>Carregando streak...</Text>
      </View>
    )
  }

  return (
    <View style={[styles.container, isStreak ? styles.fireBg : styles.iceBg]}>
      {/* Número de dias */}
      <View style={[
        styles.daysBox,
        { borderColor: isStreak ? "#fcab36" : "#1da9fc" }
      ]}>
        <Text style={[
          styles.daysNumber,
          { color: isStreak ? "#fcab36" : "#1da9fc" }
        ]}>
          {streakAtual}
        </Text>
        <Text style={[
          styles.daysLabel,
          { color: isStreak ? "#bc873c" : "#2576b7" }
        ]}>
          dias
        </Text>
      </View>
      {/* Personagem ao lado */}
      <Image
        source={
          isStreak
            ? require("../../assets/streak-fire.png")
            : require("../../assets/streak-snow.png")
        }
        style={styles.character}
      />
      {/* Texto e recorde */}
      <View style={styles.right}>
        <Text style={[
          styles.mainText,
          { color: isStreak ? "#fcab36" : "#2576b7" }
        ]}>
          {isStreak
            ? "🔥 Continue assim!\nStreak em alta!"
            : "❄️ Seu streak está congelado!\n\Tente concluir uma tarefa hoje!"}
        </Text>
        {maiorStreak > 0 && (
          <Text style={[
            styles.recordText,
            { color: isStreak ? "#bc873c" : "#2576b7" }
          ]}>
            🥇 Recorde: {maiorStreak} dias
          </Text>
        )}
      </View>
    </View>
  )
}
