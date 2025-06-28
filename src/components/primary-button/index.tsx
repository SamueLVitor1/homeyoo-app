import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'

interface Props extends TouchableOpacityProps {
  title: string
}

export function PrimaryButton({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#22C55E',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16
      }}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16 }}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}