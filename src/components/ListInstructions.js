import { FlatList } from "react-native";

import Instructions from "./Instructions.js";

export default function ListInstructions({ list }) {
    return (
        <FlatList 
            data={list}
            keyExtractor={ item => String(item.id) }
            renderItem={({ item }) => <Instructions data={item} />}
        />
    )
}