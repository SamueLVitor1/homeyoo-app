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
    justifyContent: 'flex-end'
  },
  rankBlock2: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  rankBlock3: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  rankBar: {
    width: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4
  },
  rankName: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 4
  },
  rankXp: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827'
  },
  avatar: {
    width: 78,
    height: 78,
    borderRadius: 24,
    marginBottom: 4
  }
})
