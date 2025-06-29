import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { Feather } from "@expo/vector-icons"

export function UsuarioSemCasa() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#add9b6", flex: 1 }}>
        <Image
          source={require("../../assets/house-header.png")}
          style={styles.headerImage}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <Text style={styles.title}>Você ainda não faz parte de uma casa.</Text>

          <Image
            source={require("../../assets/personagem-duvida.png")}
            style={styles.illustration}
            resizeMode="contain"
          />

          <Text style={styles.subtext}>
            Crie uma ou entre em um grupo para começar a organizar as tarefas!
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.enterButton}>
              <Feather name="log-in" size={16} color="#7E22CE" />
              <Text style={styles.enterText}> Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createButton}>
              <Feather name="plus" size={18} color="#15803D" />
              <Text style={styles.createText}> Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}