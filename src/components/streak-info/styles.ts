import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 16,
    backgroundColor: "#fffbea",
    marginVertical: 10,
    shadowColor: "#fcab36",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    marginTop: 80
  },
  daysBox: {
    backgroundColor: "#fff",
    borderColor: "#fcab36",
    borderWidth: 2,
    borderRadius: 14,
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#fcab36",
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 4,
  },
  daysNumber: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fcab36",
  },
  daysLabel: {
    fontSize: 12,
    color: "#bc873c",
    marginTop: -4,
    marginBottom: 2,
    fontWeight: "600",
  },
  character: {
    width: 58,
    height: 68,
    marginRight: 14,
  },
  right: {
    flex: 1,
    justifyContent: "center",
  },
  mainText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fcab36",
    marginBottom: 2,
  },
  recordText: {
    fontSize: 13,
    color: "#bc873c",
    marginTop: 3,
    fontWeight: "500",
  },
})
