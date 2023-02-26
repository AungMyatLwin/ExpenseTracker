import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Input from "./Input";

function ExpenseForm(){
    const [inputValues, setInputValues]=useState({
        amount:'',
        date:'',
        description:''
    });
    function inputChangeHandler(inputIndentifier,enteredValue){
        setInputValues((curInputValues)=>{
            return{
                ...curInputValues,
                [inputIndentifier]:enteredValue
            }
        });
    }
    return <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>

        <View style={styles.inputsRow}>
        
        <Input label="Amount" textInputConfig={{
            keyboardType:"decimal-pad",
            onChangeText:inputChangeHandler.bind(this, "amount"),
            value:inputValues.amount
        }}  style={styles.rowInput}/>
        
        <Input label="Date" textInputConfig={{
            onChangeText:inputChangeHandler.bind(this, "date"),
            value:inputValues.date,
            placeholder:"YYYY-MM-DD",
            maxLength:10,

        }} style={styles.rowInput}/>
        
        </View>
        
        <Input label="Description"textInputConfig={{
            multiLine: true,
            onChangeText:inputChangeHandler.bind(this, "description"),
            value:inputValues.description
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