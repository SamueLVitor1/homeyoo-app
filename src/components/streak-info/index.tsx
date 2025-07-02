import { View, Text, Image } from "react-native"
import { styles } from "./styles"

interface StreakInfoProps {
  streakAtual: number
  maiorStreak: number
}

export function StreakInfo({ streakAtual, maiorStreak }: StreakInfoProps) {
  const isStreak = streakAtual > 0

  return (
    <View style={styles.container}>
      {/* Número de dias */}
      <View style={styles.daysBox}>
        <Text style={styles.daysNumber}>{streakAtual}</Text>
        <Text style={styles.daysLabel}>dias</Text>
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
        <Text style={styles.mainText}>
          {isStreak
            ? "🔥 Continue assim!\nStreak em alta!"
            : "Seu streak está congelado!"}
        </Text>
        {maiorStreak > 0 && (
          <Text style={styles.recordText}>
            🥇 Recorde: {maiorStreak} dias
          </Text>
        )}
      </View>
    </View>
  )
}
