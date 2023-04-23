import { SafeAreaView } from "react-native";
import { styles } from "../styles";

import ListFood from "../components/ListFood.js";

import db from '../../db.json'

export default function Search() {
    return (
        <SafeAreaView style={styles.page}>
            <ListFood list={db.foods} />
        </SafeAreaView>
    )
}