import { SafeAreaView, Text } from "react-native";
import { styles } from "../styles";

import { getFavorites } from "../services/favorites"
import { useEffect, useState } from "react";

import ListFood from "../components/ListFood"

export default function Home() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        async function handleFavorites() {
            const listFavorites = await getFavorites();
            setFavorites(listFavorites);
        }

        handleFavorites();
    }, [favorites]);

    return (
        <SafeAreaView style={styles.page}>
            <Text style={[styles.title, { fontSize: 24, marginBottom: 22, }]}>
                Receitas favoritas
            </Text>
            <ListFood list={favorites} />
        </SafeAreaView>
    )
}