import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home.js"
import Detail from "../pages/Detail.js"
import Search from "../pages/Search.js"

import { namePages } from "./namePages.js";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={ namePages.home } 
                component={ Home } 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name={ namePages.detail } 
                component={ Detail } 
                options={{ title: "Strogonoff" }} 
            />
            <Stack.Screen 
                name={ namePages.search }
                component={ Search } 
                options={{ title: "Veja o que encontramos" }}
            />
        </Stack.Navigator>
    )
}