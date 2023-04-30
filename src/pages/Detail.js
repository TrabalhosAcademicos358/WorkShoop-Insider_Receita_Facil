import { 
    useNavigation, 
    useRoute 
} from "@react-navigation/native";
import { 
    Pressable, ScrollView, Text, 
    Image, View, Modal, Share 
} from "react-native";
import { 
    Ionicons, 
    AntDesign, 
    Feather 
} from '@expo/vector-icons';
import { 
    useLayoutEffect, 
    useState,
} from "react";

import { 
    saveFavorites, 
    removeFavorites, 
    isFavorite 
} from "../services/favorites";
import { 
    styles, 
    stylesDetail 
} from "../styles";

import Instructions from "../components/Instructions";
import Ingredients from "../components/Ingredients";
import Video from "../components/Video";

export default function Detail() {
    const route = useRoute();
    const navigation = useNavigation();
    const food = route.params?.data || [];

    const [showVideo, setShowVideo] = useState(false);
    const [hasFavorite, setHasFavorite] = useState(true);

    useLayoutEffect(() => {
        async function updateFavorite () {
            const receipeFavorite = await isFavorite(food) 
            setHasFavorite(receipeFavorite);
        }

        updateFavorite()
        
        navigation.setOptions({
            title: food? food.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={handleFavorite}>
                    { hasFavorite ? (
                        <Ionicons name="heart" color="#ff4141" size={28} />
                    ) : (
                        <Ionicons name="heart-outline" color="#ff4141" size={28} />
                    ) }
                </Pressable>
            )
        })
    }, [navigation, food, hasFavorite]);

    async function handleShare() {
        try {
            await Share.share({
                url: "https://github.com/Pedro35803",
                message: `Receita: ${food.name}`
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function handleFavorite() {
        if (!hasFavorite) 
            await saveFavorites(food);
        else
            await removeFavorites(food);
        setHasFavorite(!hasFavorite)
    }

    return (
        <ScrollView 
            style={[styles.page, stylesDetail.page]}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
        >
            <Pressable style={{marginBottom: 20}} onPress={ () => setShowVideo(true) }>
                <View style={stylesDetail.playIcon}>
                    <AntDesign name="playcircleo" size={48} color="#fafafa" />
                </View>
                <Image 
                    source={{ uri: food.cover }} 
                    style={styles.image}
                />
            </Pressable>

            <View style={stylesDetail.header}>
                <View>
                    <Text style={[stylesDetail.foodName, stylesDetail.name]}>
                        {food.name}
                    </Text>

                    <Text style={stylesDetail.foodIngredients}>
                        ingredientes ({food.total_ingredients})
                    </Text>
                </View>
                <Pressable onPress={handleShare}>
                    <Feather name="share-2" size={24} color="#121212" />
                </Pressable>
            </View>
            
            { food.ingredients.map(item => <Ingredients data={item} key={item.id} />) }
            
            <Text style={stylesDetail.cardTitle}>
                Modo de preparo
            </Text>

            { food.instructions.map(item => <Instructions data={item} key={item.id} />) }

            <Modal visible={showVideo} animationType="slide">
                <Video
                    handleClose={ ()  => setShowVideo(false) }
                    urlVideo={food.video}
                />
            </Modal>
        </ScrollView>
    )
}