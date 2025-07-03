import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  membroCard: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F7FAFE',
    padding: 12,
    borderRadius: 20,
    marginHorizontal: 8,
    minWidth: 90,
    maxWidth: 100,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#E1E6F2',
    position: 'relative'
  },
  avatarBox: {
    width: 56,
    height: 56,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#B0E3C3',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    position: 'relative'
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  adminBadge: {
    position: 'absolute',
    bottom: -3,
    right: -3,
    backgroundColor: '#F59E42',
    borderRadius: 10,
    padding: 2,
    borderWidth: 2,
    borderColor: '#fff',
    zIndex: 5
  },
  membroNome: {
    fontWeight: '600',
    fontSize: 13.5,
    color: '#14532D',
    textAlign: 'center',
    marginTop: 2
  },
});
