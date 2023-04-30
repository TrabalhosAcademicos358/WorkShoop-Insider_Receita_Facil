import { useRoute } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { getFavorites } from "../services/favorites"

import ListFood from "../components/ListFood";
import db from '../../db.json';

export default function Search() {
    const route = useRoute()
    const { text } = route.params
    const [foods, setFoods] = useState([])

    useEffect(() => {
        async function updateFoods() {
            const listFoods = db.foods;
            const listFilter = listFoods.filter(item => {
                const name = item.name;
                return name.includes(text);
            });
            setFoods(listFilter);
        }

        updateFoods()
    }, [text])

    return (
        <SafeAreaView style={[styles.page, { paddingTop: 40 }]}>
            {
                foods.length === 0 ? (
                    <Text style={{ fontSize: 16 }}>
                        Ops não encontramos sua receita...
                    </Text>
                ) : (
                    <ListFood list={foods} />
                )
            }
        </SafeAreaView>
    )
}