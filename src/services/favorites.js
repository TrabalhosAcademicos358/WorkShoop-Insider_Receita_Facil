import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "favorites";

export async function getFavorites() {
    const favorites = await AsyncStorage.getItem(key);
    return JSON.parse(favorites) || [];
}

export async function saveFavorites(food) {
    const currentFavorites = await getFavorites();
    const hasItem = currentFavorites.some(item => item.id === food.id);
    if (hasItem) return null;

    const newFavorites = JSON.stringify({ 
        ...currentFavorites,
        food
    });

    const favorites = await AsyncStorage.setItem(key, newFavorites);
    return favorites;
}

export async function removeFavorites(food) {
    const favorites = await getFavorites();
    const newFavorites = favorites.filter(item => item.id != food.id);
    await AsyncStorage.setItem(key, JSON.stringify(newFavorites))
    return newFavorites;
}

export async function isFavorite(food) {
    const favorites = await getFavorites();
    const hasItem = favorites.some(item => item.id === food.id);
    console.log(hasItem)
    return hasItem;
}