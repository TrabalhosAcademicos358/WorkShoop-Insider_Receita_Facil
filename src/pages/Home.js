import { SafeAreaView } from "react-native";
import { Text } from "moti";
import { styles } from "../styles";

import ListFood from "../components/ListFood.js";
import Search from "../components/Search.js";
import Logo from "../components/Logo.js";

import db from '../../db.json'

export default function Home() {
    return (
        <SafeAreaView style={styles.page}>
            <Logo />
            <Text 
                style={styles.title}
                from={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'timing', duration: 750 }}    
            >
                Encontre a receita
                que combina com você
            </Text>
            <Search />
            <ListFood list={db.foods} />
        </SafeAreaView>
    )
}