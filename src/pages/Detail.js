import { useNavigation, useRoute } from "@react-navigation/native";
import { Pressable, SafeAreaView, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from "react";

import { styles, stylesDetail } from "../styles";

import ListIngredients from "../components/ListIngredients"
import ListInstructions from "../components/ListInstructions"

export default function Detail() {
    const route = useRoute();
    const food = route.params?.data || [];
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: food? food.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable>
                    <Ionicons name="heart" color="#ff4141" size={28} />
                </Pressable>
            )
        })
    }, [navigation, food]);

    return (
        <SafeAreaView style={[styles.page, stylesDetail.page]}>
            <Text style={[stylesDetail.foodName, stylesDetail.name]}>
                {food.name}
            </Text>

            <Text style={stylesDetail.foodIngredients}>
                ingredientes ({food.total_ingredients})
            </Text>
            
            <ListIngredients 
                list={food.ingredients} 
            />
            
            <Text style={stylesDetail.cardTitle}>
                Modo de preparo
            </Text>

            <ListInstructions
                list={food.instructions} 
            />
        </SafeAreaView>
    )
}