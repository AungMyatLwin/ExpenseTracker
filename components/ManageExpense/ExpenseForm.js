import { StyleSheet, View } from "react-native";

import Input from "./Input";

function ExpenseForm(){
    function amountChangeHandler(){

    }
    return <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
        <Input label="Amount" textInputConfig={{
            keyboardType:"decimal-pad",
            onChangeText:amountChangeHandler,
        }} style={styles.rowInput}/>
        <Input label="Date" textInputConfig={{
            onChangeText:()=>{},
            placeholder:"YYYY-MM-DD",
            maxLength:10,
        }} style={styles.rowInput}/>
        </View>
        <Input label="Description"textInputConfig={{
            multiLine: true,
        }}/>
    </View>

}

export default ExpenseForm;

const styles=StyleSheet.create({
    inputsRow:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    rowInput:{
        flex:1
    },
    form:{
        marginTop:40
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:"white",
        textAlign:"center",
        marginVertical:24
    }
});