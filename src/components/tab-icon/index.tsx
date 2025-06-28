import { Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"

interface TabIconProps {
  focused: boolean
  iconName: keyof typeof Feather.glyphMap
  title: string
}

export function TabIcon({ focused, iconName, title }: TabIconProps) {
  if (focused) {
    return (
      <View style={{
        flexDirection: 'row',
        backgroundColor: '#FFF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3
      }}>
        <Feather name={iconName} size={20} color="#151312" />
        <Text style={{ marginLeft: 8, color: '#151312', fontWeight: '600' }}>{title}</Text>
      </View>
    )
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Feather name={iconName} size={20} color="#A8B5DB" />
    </View>
  )
}
