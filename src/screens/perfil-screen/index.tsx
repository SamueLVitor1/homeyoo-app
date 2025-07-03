import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { MedalhasUsuario } from "../../components/MedalhasUsuario";
import { buscarPerfil } from "../../services/buscar-perfil";
import { useTarefasContext } from "../../contexts/tarefas-context";

export function PerfilScreen() {

  const {tarefasReload} = useTarefasContext()

  const { signOut } = useAuth();
  const [userInfo, setUserInfo] = useState<any>();
  const [loading, setLoading] = useState(true);

  function formatarDataBR(dataISO: string | undefined) {
    if (!dataISO) return '';
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  useEffect(() => {
    async function buscarPerfilUser() {
      setLoading(true);
      try {
        const response = await buscarPerfil(); // Exemplo: { usuario: { ... } }
        if (response) {
          // Monte o objeto já com os campos que seu componente espera:
          setUserInfo({
            avatar: response.avatar || "https://ui-avatars.com/api/?name=" + encodeURIComponent(response.nome || "User"),
            name: response.nome,
            email: response.email,
            role: response.casas?.[0]?.papel === 'admin' ? 'Admin' : 'Membro',
            joinedAt: response.data_criacao,
            medalhas: response.medalhas || [],
          });
        }
      } finally {
        setLoading(false);
      }
    }
    buscarPerfilUser();
  }, [tarefasReload]);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#166534" />
      </View>
    );
  }

  if (!userInfo) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Perfil</Text>
      <View style={styles.profileCard}>
        <Image source={{ uri: userInfo.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{userInfo.name}</Text>
        <Text style={styles.email}>{userInfo.email}</Text>
        <View style={styles.roleBadge}>
          <Text style={styles.roleText}>{userInfo.role}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Entrou em:</Text>
          <Text style={styles.infoValue}>{formatarDataBR(userInfo.joinedAt)}</Text>
        </View>
      </View>

      <MedalhasUsuario medalhas={userInfo.medalhas} />

      <TouchableOpacity onPress={signOut} style={styles.logoutButton} >
        <Feather name="log-out" size={22} color="#6B7280" />
        <Text>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}
