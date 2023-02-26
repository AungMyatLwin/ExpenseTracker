import { Text, TextInput, View } from "react-native";

function Input({label, textInputConfig}){
    const inputStyles=[styles.input];
    if(textInputConfig && textInputConfig.multiLine){
        inputStyles.push(styles.inputMultiLine)
    }
    return <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput {...textInputConfig} style={styles.inputMultiLine}/>
    </View>

}

export default Input;


const styles=StyleSheet.create({
    inputContainer:{
        marginHorizontal:4,
        marginVertical:8,
    },
    label:{
        fontSize:12,
        color:GlobalStyles.colors.primary100,
        marginBottom:4
    },
    input:{
        backgroundColor:GlobalStyles.colors.primary100,
        padding:6,
        borderRadius:6,
        fontSize:18,
        color:GlobalStyles.colors.primary700
    },
    inputMultiLine:{
        minHeight:100,
        textAlignVertical:'top'
    },

});