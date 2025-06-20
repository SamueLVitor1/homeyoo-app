import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { AuthProvider } from './src/contexts/AuthContext';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TelasPrivadas } from './src/navigation/pages-privada';
import { TelasPublica } from './src/navigation/pages-publicas';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData() {
      const token = await AsyncStorage.getItem('@token')
      setIsAuthenticated(!!token)
      setLoading(false)
    }

    loadStorageData()
  }, [])

  if (loading) {
    return null 
  }


  return (
    <AuthProvider>
      <NavigationContainer>
        {isAuthenticated ? <TelasPrivadas /> : <TelasPublica />}
      </NavigationContainer>
      <Toast />
    </AuthProvider>
  )
}

