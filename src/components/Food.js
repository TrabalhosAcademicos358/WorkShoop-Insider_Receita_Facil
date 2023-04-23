import { TouchableOpacity, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../styles';

export default function Food({ name, total_ingredients, time, cover }) {
    return (
        <TouchableOpacity activeOpacity={0.55} style={styles.card}>
            <Image source={{ uri: cover }} style={styles.image} />
            <View style={styles.cardViewText}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardText}>{total_ingredients} ingredientes | {time} min</Text>
            </View>
            <LinearGradient 
                style={styles.linearGradient}
                colors={["transparent", "rgba(0, 0, 0, 0.1)", "rgb(0, 0, 0)"]}
            />
        </TouchableOpacity>
    )
}