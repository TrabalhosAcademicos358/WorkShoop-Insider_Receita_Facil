import { View } from "moti";
import { Text } from "react-native";
import { stylesLogo } from "../styles.js"

export default function Logo() {
    return (
        <View 
            style={stylesLogo.view}
            from={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'spring', duration: 750 }}
        >
            <Text style={stylesLogo.text}>Receita Facil</Text>
        </View>
    )
}