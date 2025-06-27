import { Text, TextInput, TouchableOpacity, View, ScrollView, ActivityIndicator, Image } from "react-native"
import { styles } from "./styles"
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Toast from 'react-native-toast-message'
import { useNavigation } from "@react-navigation/native"

import { useAuth } from "../../contexts/AuthContext"
import { criarUsuario } from "../../services/criar-usuario"
// import { loginUser } from "../../services/login-service" // depois você troca pelo createUser

const formSchema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmarSenha: z.string()
}).refine((data) => data.senha === data.confirmarSenha, {
  message: "As senhas não coincidem",
  path: ["confirmarSenha"]
})

type FormData = z.infer<typeof formSchema>

export function CadastroScreen() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation()
  const { signIn } = useAuth()

  const avatarUrls = [
    "https://res.cloudinary.com/dzlxbwggb/image/upload/fl_preserve_transparency/v1750997777/3-removebg-preview_rrqtzf.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzlxbwggb/image/upload/fl_preserve_transparency/v1750997789/4-removebg-preview_pmle5d.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzlxbwggb/image/upload/fl_preserve_transparency/v1750997810/Design_sem_nome-removebg-preview_1_tsrjco.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzlxbwggb/image/upload/fl_preserve_transparency/v1750997814/Design_sem_nome-removebg-preview_troifh.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzlxbwggb/image/upload/fl_preserve_transparency/v1750997803/Design_sem_nome__1_-removebg-preview_fty3qo.jpg?_s=public-apps",
  ]

  const [avatarSelecionado, setAvatarSelecionado] = useState<string | null>(null)


  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    const body = {
      ...data,
      avatar: avatarSelecionado
    }

    console.log(body)

    setIsLoading(true)
    try {
      const response = await criarUsuario(data)
      await signIn({ token: response.token, user: response.usuario })

      Toast.show({
        type: 'success',
        text1: 'Conta criada com sucesso!',
        position: 'bottom'
      })
      setIsLoading(false)
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao criar conta',
        position: 'bottom'
      })
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LinearGradient colors={['#ECFEFF', '#FCEFE6']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleMain}>Criar Conta</Text>
        </View>

        <View style={styles.form}>
          {/* Nome */}
          <Controller
            control={control}
            name="nome"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#999"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.nome && <Text style={{ color: 'red' }}>{errors.nome.message}</Text>}

          {/* Email */}
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

          {/* Senha */}
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

          {/* Confirmar senha */}
          <Controller
            control={control}
            name="confirmarSenha"
            render={({ field: { onChange, value } }) => (
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.inputPassword}
                  placeholder="Confirmar senha"
                  placeholderTextColor="#999"
                  secureTextEntry={!showConfirmPassword}
                  value={value}
                  onChangeText={onChange}
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Feather name={showConfirmPassword ? 'eye' : 'eye-off'} size={20} color="#666" />
                </TouchableOpacity>
              </View>
            )}
          />
          {errors.confirmarSenha && <Text style={{ color: 'red' }}>{errors.confirmarSenha.message}</Text>}

          <Text style={{ fontWeight: 'bold', marginBottom: 10, marginTop: 25 }}>Selecione um avatar</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 12 }}
            style={{ marginBottom: 24 }}
          >
            {avatarUrls.map((url, index) => (
              <TouchableOpacity key={index} onPress={() => setAvatarSelecionado(url)}>
                <Image
                  source={{ uri: url }}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 35,
                    borderWidth: avatarSelecionado === url ? 3 : 0,
                    borderColor: '#22C55E'
                  }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>


          {/* Botão */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)} disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Criar Conta</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Link login */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
          <Text style={styles.register}>Já tem uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}
