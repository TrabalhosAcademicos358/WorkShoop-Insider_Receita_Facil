import { FlatList } from "react-native";

import Ingredients from "./Ingredients";

export default function ListIngredients({ list }) {
    return (
        <FlatList 
            data={list}
            keyExtractor={ item => String(item.id) }
            renderItem={({ item }) => <Ingredients data={item} />}
            showsVerticalScrollIndicator={false}
        />
    )
}