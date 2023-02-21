import { Pressable, StyleSheet, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';


function IconButtons({icon, size, color, onPress}){
    return (
    <Pressable onPress={onPress} 
    style={({pressed})=>pressed && styles.press}
    >
        <View style={styles.button}>
            <Ionicons name={icon}  size={size} color={color} />
        </View>
    </Pressable>);
}

export default IconButtons;

const styles= StyleSheet.create({
    button:{
        borderRadius:24,
        padding:6,
        marginHorizontal:8,
        marginVertical:2
    },
    press:{
        opacity:0.75
    }
});