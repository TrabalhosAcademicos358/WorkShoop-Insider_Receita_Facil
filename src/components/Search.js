import { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import { styles } from '../styles'
import { namePages } from "../routes/namePages"

export default function Search() {
    const [value, setValue] = useState("");
    const navigation = useNavigation();

    function handleSearch() {
        if (value.trim() === "") return null;
        const textInput = value;
        setValue("");
        navigation.navigate(
            namePages.search, 
            { text: textInput }
        );
    }

    return (
        <View style={styles.viewSearch}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                placeholder="Digite o nome da comida"
                placeholderTextColor="#AAA"
                value={value}
            />
            <TouchableOpacity onPress={handleSearch}>
                <Ionicons name="search" color="#46BD6A" size={24} />
            </TouchableOpacity>
        </View>
    )
}