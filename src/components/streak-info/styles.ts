import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 16,
    marginVertical: 10,
    shadowOpacity: 0.09,
    shadowRadius: 6,
    elevation: 2,
    shadowOffset: { width: 0, height: 3 },
  },
  fireBg: {
    backgroundColor: "#fffbea",
    shadowColor: "#fcab36",
  },
  iceBg: {
    backgroundColor: "#e0f4fd",
    shadowColor: "#1da9fc",
  },
  daysBox: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 14,
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 0,
    shadowOpacity: 0.09,
    shadowRadius: 6,
    elevation: 4,
  },
  daysNumber: {
    fontSize: 32,
    fontWeight: "bold",
  },
  daysLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: -4,
    marginBottom: 2,
  },
  character: {
    width: 58,
    height: 62,
    marginRight: 14,
  },
  right: {
    flex: 1,
    justifyContent: "center",
  },
  mainText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: 'center'
  },
  recordText: {
    fontSize: 13,
    marginTop: 6,
    fontWeight: "500",
    textAlign: 'center'
  },
})
