import { View, Text } from "react-native";
import { stylesLogo } from "../styles.js"

export default function Logo() {
    return (
        <View style={stylesLogo.view}>
            <Text style={stylesLogo.text}>Receita Facil</Text>
        </View>
    )
}