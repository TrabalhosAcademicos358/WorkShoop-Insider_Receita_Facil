import { View, Text } from "react-native";
import { styles } from "../styles";

export default function Home() {
    return (
        <View style={styles.page}>
            <Text style={styles.title}>
                Encontre a receita
                que combina com você
            </Text>
        </View>
    )
}