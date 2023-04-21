import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    page: {
        backgroundColor: "#F3F9FF",
        paddingVertical: 75,
        paddingHorizontal: 25,
        height: "100%",
    },
    title: {
        fontSize: 28,
        fontWeight: 700,
        color: "#0E0E0E",
    },
    viewSearch: {
        backgroundColor: "#FFF",
        height: 52,
        marginTop: 18,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 14,

        borderRadius: 14,
        borderColor: "#ECECEC",
        borderStyle: "solid",
        borderWidth: 1
    },
    input: {
        width: "89%"
    }
})