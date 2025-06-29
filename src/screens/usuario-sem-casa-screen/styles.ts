import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F8FF",
    marginTop: 24,
  },
  headerImage: {
    width: "100%",
    height: 150,
  },
  content: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#14532D",
    textAlign: "center",
    marginTop: 20,
  },
  illustration: {
    width: 240,
    height: 320,
    marginVertical: 24,
  },
  subtext: {
    fontSize: 16,
    color: "#4B5563",
    textAlign: "center",
    marginBottom: 24,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
  },
  enterButton: {
    backgroundColor: "#EDE9FE",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 160
  },
  enterText: {
    color: "#6D28D9",
    fontWeight: "bold",
  },
  createButton: {
    backgroundColor: "#DCFCE7",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: "row",
    gap: 6,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    width: 160
  },
  createText: {
    color: "#166534",
    fontWeight: "bold",
  },
})
