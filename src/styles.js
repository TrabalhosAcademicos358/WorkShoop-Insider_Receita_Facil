import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    page: {
        backgroundColor: "#F3F9FF",
        paddingTop: 75,
        paddingHorizontal: 25,
        height: "100%",
    },
    title: {
        fontSize: 28,
        fontWeight: 700,
        color: "#0E0E0E",
    },
    input: {
        width: "89%"
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 8,
    },
    linearGradient: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 14,
        backgroundColor: "transparent",
        zIndex: 1
    },
    viewSearch: {
        backgroundColor: "#FFF",
        height: 52,
        marginTop: 18,
        marginBottom: 22,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 14,

        borderRadius: 14,
        borderColor: "#ECECEC",
        borderStyle: "solid",
        borderWidth: 1
    },
    card: {
        borderRadius: 8,
        backgroundColor: "gray",
        position: "relative",
        marginBottom: 16
    },
    cardViewText: {
        height: "100%",
        position: "absolute",
        padding: 15,
        justifyContent: "flex-end",
        zIndex: 2
    },
    cardTitle: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 700,
    },
    cardText: {
        fontSize: 14,
        color: "#FFF",
    },
})

export const stylesLogo = StyleSheet.create({
    view: {
        alignSelf: "flex-start",
        backgroundColor: "#4CBE6C",
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 8,
        borderRadius: 9,
        borderBottomRightRadius: 32
    },
    text: {
        color: "#fff",
        fontWeight: 700,
        fontSize: 18
    }
})