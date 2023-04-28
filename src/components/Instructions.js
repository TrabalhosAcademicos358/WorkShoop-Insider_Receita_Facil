import { View, Text } from 'react-native';

import { stylesDetail } from '../styles';

export default function Ingredients({ data }) {
    return (
        <View style={stylesDetail.instruction}>
            <Text style={stylesDetail.instructionNumber}>{data.id} - </Text>
            <Text style={stylesDetail.instructionText}>{data.text}</Text>
        </View>
    )
}