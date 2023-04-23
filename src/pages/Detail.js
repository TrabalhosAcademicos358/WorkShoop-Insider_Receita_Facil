import { useNavigation, useRoute } from "@react-navigation/native";
import { Pressable, SafeAreaView, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from "react";

import { styles } from "../styles";

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
        <SafeAreaView style={styles.page}>
            <Text>Em construção ainda</Text>
            <Text>{food.name}</Text>
        </SafeAreaView>
    )
}