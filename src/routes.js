import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "./pages/Home.js"
import FavoritesScreen from "./pages/Favorites.js"

const Tab = createBottomTabNavigator()

export default function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
    )
}