import { SafeAreaView, Text } from "react-native";
import { styles } from "../styles";

import Search from "../components/Search.js"
import ListFood from "../components/ListFood";

import db from '../../db.json'

export default function Home() {
    return (
        <SafeAreaView style={styles.page}>
            <Text style={styles.title}>
                Encontre a receita
                que combina com você
            </Text>
            <Search />
            <ListFood list={db.foods} />
        </SafeAreaView>
    )
}