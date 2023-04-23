import { TouchableOpacity, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../styles';
import { namePages } from '../routes/namePages.js'

export default function Food({ data }) {
    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate(namePages.detail, {data: data})
    }
    
    return (
        <TouchableOpacity activeOpacity={0.55} style={styles.card} onPress={handleNavigate}>
            <Image source={{ uri: data.cover }} style={styles.image} />
            <View style={styles.cardViewText}>
                <Text style={styles.cardTitle}>{data.name}</Text>
                <Text style={styles.cardText}>
                    {data.total_ingredients} ingredientes | {data.time} min
                </Text>
            </View>
            <LinearGradient 
                style={styles.linearGradient}
                colors={["transparent", "rgba(0, 0, 0, 0.1)", "rgb(0, 0, 0)"]}
            />
        </TouchableOpacity>
    )
}