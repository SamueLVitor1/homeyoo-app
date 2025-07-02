import { Text, TextInput, TouchableOpacity, View, ScrollView, ActivityIndicator } from "react-native"
import { styles } from "./styles"
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from "react-native"
import { useState } from "react"
import { Feather } from '@expo/vector-icons'
import { z } from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginUser } from "../../services/login-service"
import Toast from 'react-native-toast-message'

import { useAuth } from "../../contexts/AuthContext"
import { useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../../components/primary-button"

type StackRoutes = {
  Home: undefined;
};

const formSchema = z.object({
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
})


type FormData = z.infer<typeof formSchema>

export function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false)
  const { signIn } = useAuth()
  const [isLoading, setIsLoading] = useState(false)


  const navigation = useNavigation<any>()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)

    try {
      const response = await loginUser(data)
      Toast.show({
        type: 'success',
        text1: 'Login realizado com sucesso!',
        position: 'top'
      })

      const { token, usuario } = response

      await signIn({ token, user: usuario })
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao fazer login',
        text2: 'Verifique seu email e senha',
        position: 'top'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LinearGradient colors={['#ECFEFF', '#FCEFE6']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Image source={require('../../assets/logo-login.png')} style={styles.imageLogo} />

        <View style={styles.titleContainer}>
          <Text style={styles.titleMain}>Olá de novo!</Text>
          <Text style={styles.titleSecondary}>Que bom te ver por aqui</Text>
        </View>

        <View style={styles.form}>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}

          <Controller
            control={control}
            name="senha"
            render={({ field: { onChange, value } }) => (
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.inputPassword}
                  placeholder="Senha"
                  placeholderTextColor="#999"
                  secureTextEntry={!showPassword}
                  value={value}
                  onChangeText={onChange}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Feather name={showPassword ? 'eye' : 'eye-off'} size={20} color="#666" />
                </TouchableOpacity>
              </View>
            )}
          />
          {errors.senha && <Text style={{ color: 'red' }}>{errors.senha.message}</Text>}
          {isLoading ? (
            <ActivityIndicator color="#22C55E" style={{ marginTop: 16 }} />
          ) : (
            <PrimaryButton title="Entrar" onPress={handleSubmit(onSubmit)} />
          )}
        </View>

        <Text style={styles.register}>
          Ainda não possui conta?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.link}>Crie uma nova conta aqui</Text>
        </TouchableOpacity>


      </ScrollView>
    </LinearGradient>
  )
}
