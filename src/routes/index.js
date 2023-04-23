import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import StackRoutes from "./StackRoutes.js"
import FavoritesScreen from "../pages/Favorites.js";

const Tab = createBottomTabNavigator();

function changeIcon(name, colorFull = "#000") {
    return {
        tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
                return <Ionicons name={name} color={colorFull} size={size} />
            }
            return <Ionicons name={`${name}-outline`} color={color} size={size} />
        }
    }
}

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#121212",

                tabBarStyle: {
                    backgroundColor: "#fff",
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen 
                name="HomeTab"
                component={StackRoutes} 
                options={changeIcon("home")}
            />

            <Tab.Screen 
                name="FavoritesTab" 
                component={FavoritesScreen} 
                options={changeIcon("heart", "#FF4141")}
            />
        </Tab.Navigator>
    )
}