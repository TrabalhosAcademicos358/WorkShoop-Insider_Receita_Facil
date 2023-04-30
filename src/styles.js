import { StyleSheet } from "react-native";

const color = {
    white: "#fff",
    black: "#000",
    logo: "#4CBE6C"
}

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
        top: 0, left: 0,
        right: 0, bottom: 0,
        borderRadius: 14,
        backgroundColor: "transparent",
        zIndex: 1
    },
    viewSearch: {
        backgroundColor: color.white,
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
        color: color.white,
        fontSize: 18,
        fontWeight: 700,
    },
    cardText: {
        fontSize: 14,
        color: color.white
    },
})

export const stylesLogo = StyleSheet.create({
    view: {
        alignSelf: "flex-start",
        backgroundColor: color.logo,
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

export const stylesDetail = StyleSheet.create({
    page: {
        paddingTop: 20,
    },
    header: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center"
    },
    playIcon: {
        position: "absolute",
        top: 0, right: 0, 
        left: 0, bottom: 0,
        zIndex: 2,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontSize: 18,
        fontWeight: 700,
        color: color.black
    },
    foodName: {
        marginBottom: 8
    },
    foodIngredients: {
        fontSize: 18,
        marginBottom: 24
    },
    card: {
        backgroundColor: color.white,
        width: "100%",
        paddingVertical: 14.5,
        paddingHorizontal: 9,
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cardTitle: {
        backgroundColor: color.logo,
        color: color.white  ,
        marginTop: 16,
        marginBottom: 15,
        paddingVertical: 7,
        paddingHorizontal: 11,
        width: "100%",
        fontSize: 18,
        fontWeight: 700,
    },
    amount: {
        fontSize: 14,
        color: color.black
    },
    instruction: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 9
    },
    instructionNumber: {
        fontSize: 20,
        fontWeight: 700
    },
    instructionText: {
        fontSize: 14,
        lineHeight: 20
    }
})