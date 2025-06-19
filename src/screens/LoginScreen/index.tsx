import { Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native"
import { styles } from "./styles"
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from "react-native"

export function LoginScreen() {
  return (
    <LinearGradient colors={['#ECFEFF', '#FCEFE6']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Image source={require('../../assets/logo-login.png')} style={styles.imageLogo} />

        <View style={styles.titleContainer}>
          <Text style={styles.titleMain}>Olá de novo!</Text>
          <Text style={styles.titleSecondary}>Que bom te ver por aqui</Text>
        </View>

        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" />
          <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#999" secureTextEntry />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.register}>
          Ainda não possui conta? <Text style={styles.link}>Crie uma nova conta aqui</Text>
        </Text>
      </ScrollView>
    </LinearGradient>
  )
}
