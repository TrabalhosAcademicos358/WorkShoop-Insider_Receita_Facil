import { FlatList } from "react-native";

import Food from "./Food";

export default function ListFood({ list }) {
    return (
        <FlatList 
            data={list}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Food {...item} />}
        />
    )
}