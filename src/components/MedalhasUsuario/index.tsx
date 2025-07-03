import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Medalha } from "../../types/usuario";

interface MedalhasUsuarioProps {
  medalhas?: Medalha[]
}

export function MedalhasUsuario({ medalhas = [] }: MedalhasUsuarioProps) {
  if (!medalhas.length) {
    return null;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Conquistas</Text>
      <View style={styles.medalhasRow}>
        {medalhas.map((medalha) => (
          <View
            key={medalha.nome}
            style={[
              styles.medalhaBox,
              medalha.habilitado && styles.medalhaBoxAtiva // Estilo extra se habilitada
            ]}
          >
            <Image
              source={{ uri: medalha.iconeUrl }}
              style={[
                styles.medalhaIcon,
                medalha.habilitado && styles.medalhaIconAtiva, // sombra/glow
                !medalha.habilitado && { opacity: 0.3 }
              ]}
            />
            <Text
              style={[
                styles.medalhaLabel,
                medalha.habilitado && styles.medalhaLabelAtiva, // cor diferente se habilitada
                !medalha.habilitado && { color: "#a1a1aa" }
              ]}
            >
              {medalha.displayName}
            </Text>
            <Text style={[
              styles.progresso,
              medalha.habilitado && { color: "#22c55e", fontWeight: "bold" } // verde
            ]}>
              {medalha.pontosUsuario}/{medalha.pontosNecessarios}
            </Text>
            {medalha.habilitado && (
              <Text style={styles.badgeConquistada}>Conquistada!</Text>
            )}
          </View>

        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 10,
    elevation: 2,
    width: "100%",
    maxWidth: 370,
    marginTop: 0, // pode ajustar se quiser colar no card de perfil
  },
  title: {
    fontWeight: "bold",
    color: "#334155",
    fontSize: 17,
    marginBottom: 20,
    alignSelf: "center",
    marginLeft: 8,
  },
  medalhasRow: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    display: 'flex',
    flexWrap: 'wrap'
  },
  medalhaBox: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
    padding: 6,
    borderRadius: 14,
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    minWidth: 76,
  },
  medalhaIcon: {
    width: 42,
    height: 48,
    marginBottom: 4,
  },
  medalhaLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 2,
    textAlign: "center"
  },
  progresso: {
    fontSize: 12,
    color: "#6b7280"
  },
  medalhaBoxAtiva: {
    borderColor: "#22c55e",         // Borda verde para conquistada
    backgroundColor: "#f0fdf4",     // Fundo levemente verde
    shadowColor: "#22c55e",         // Sombra verde
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  medalhaIconAtiva: {
    // Um leve "glow" ao redor do ícone
    shadowColor: "#22c55e",
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 3,
  },
  medalhaLabelAtiva: {
    color: "#166534",
    fontWeight: "bold",
  },
  badgeConquistada: {
    marginTop: 2,
    fontSize: 11,
    color: "#22c55e",
    fontWeight: "700",
    letterSpacing: 0.4,
  }

});
