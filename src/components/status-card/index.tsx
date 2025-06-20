import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'; // ou lucide/react-native, Ionicons etc
import { styles } from './styles';

interface StatusCardProps {
  iconName: string;
  iconColor: string;
  label: string;
  value: number;
}

export function StatusCard({ iconName, iconColor, label, value }: StatusCardProps) {
  return (
    <View style={styles.card}>
      <Feather name={iconName as any} size={24} color={iconColor} />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
