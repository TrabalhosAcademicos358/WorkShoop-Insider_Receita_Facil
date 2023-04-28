import { View, Text } from 'react-native';
import { stylesDetail } from '../styles';

export default function Ingredients({ data }) {
    return (
        <View style={stylesDetail.card}>
            <Text style={stylesDetail.name}>{data.name}</Text>
            <Text style={stylesDetail.amount}>{data.amount}</Text>
        </View>
    )
}