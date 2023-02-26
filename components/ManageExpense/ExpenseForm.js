import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Input from "./Input";

function ExpenseForm(){
    function amountChangeHandler(){

    }
    return <View>
        <Input label="Amount" textInputConfig={{
            keyboardType:"decimal-pad",
            onChangeText:amountChangeHandler,
        }} style={styles.inputContainer}/>
        <Input label="Date" textInputConfig={{
            onChangeText:()=>{},
            placeholder:"YYYY-MM-DD",
            maxLength:10,
        }} style={styles.label}/>
        <Input label="Description"textInputConfig={{
            multiLine: true,
        }} style={styles.input}/>
    </View>

}

export default ExpenseForm;

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
    }
});