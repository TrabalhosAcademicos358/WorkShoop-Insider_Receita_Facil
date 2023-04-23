import { SafeAreaView, Text } from "react-native";
import { styles } from "../styles";

import ListFood from "../components/ListFood.js";
import Search from "../components/Search.js";
import Logo from "../components/Logo.js";

import db from '../../db.json'

export default function Home() {
    return (
        <SafeAreaView style={styles.page}>
            <Logo />
            <Text style={styles.title}>
                Encontre a receita
                que combina com você
            </Text>
            <Search />
            <ListFood list={db.foods} />
        </SafeAreaView>
    )
}