import { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from '../styles.js'

export default function Search() {
    const [value, setValue] = useState("");
    return (
        <View style={styles.viewSearch}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                placeholder="Digite o nome da comida"
                placeholderTextColor="#AAA"
                value={value}
            />
            <TouchableOpacity onPress={() => console.log(value)}>
                <Ionicons name="search" color="#46BD6A" size={24} />
            </TouchableOpacity>
        </View>
    )
}