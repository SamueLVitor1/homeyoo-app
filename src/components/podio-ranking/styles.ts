import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  rankingContainer: {
    marginBottom: 32
  },
  rankingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  rankingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10B981'
  },
  metaText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7C3AED'
  },
  podio: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 12
  },
  rankBlock1: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 2,
  },
  rankBlock2: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 24, // deixa mais abaixo
    zIndex: 1,
  },
  rankBlock3: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 32, // deixa mais abaixo ainda
    zIndex: 0,
  },
  rankBar: {
    width: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6, // para Android
  },
  rankName: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 4,
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  rankXp: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827'
  },
  avatar1: {
    width: 78,
    height: 78,
    borderRadius: 999,
    marginBottom: 4,
    borderWidth: 2,
    borderColor: '#FACC15'
  },
  avatar2: {
    width: 78,
    height: 78,
    borderRadius: 24,
    marginBottom: 4,
  },
  avatar3: {
    width: 78,
    height: 78,
    borderRadius: 24,
    marginBottom: 4,
  },

})
