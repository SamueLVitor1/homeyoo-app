import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { PrimaryButton } from "../../components/primary-button";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

export function PerfilScreen() {
  const { user, signOut } = useAuth();

  // Mock profile, pode vir do user!
  const profile = {
    avatar: user?.avatar || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user?.nome || "User"),
    name: user?.nome || "Nome do usuário",
    email: user?.email || "email@exemplo.com",
    role: "Membro",
    joinedAt: user?.data_criacao, // data mock
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Perfil</Text>
      <View style={styles.profileCard}>
        <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.email}>{profile.email}</Text>
        <View style={styles.roleBadge}>
          <Text style={styles.roleText}>{profile.role}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Entrou em:</Text>
          <Text style={styles.infoValue}>{profile.joinedAt}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={signOut} style={styles.logoutButton} >
        <Feather name="log-out" size={22} color="#6B7280" />
        <Text>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}
