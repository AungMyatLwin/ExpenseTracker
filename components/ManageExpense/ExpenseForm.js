import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getFormattedDate } from "../../util/date";
import Button from "../UI/Button";

import Input from "./Input";

function ExpenseForm({submitButtonLabel, onCancel, onSubmit, defaultValues}){
    const [inputValues, setInputValues]=useState({
        amount:defaultValues ? defaultValues.amount.toString() : '',
        date:defaultValues ? getFormattedDate(defaultValues.date) : '',
        description:defaultValues ? defaultValues.description : ''
    });
    function inputChangeHandler(inputIndentifier,enteredValue){
        setInputValues((curInputValues)=>{
            return{
                ...curInputValues,
                [inputIndentifier]:enteredValue
            }
        });
    }
    function submitHandler(){
        const expenseData= {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        };
        onSubmit(expenseData);
    }
    return <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>

        <View style={styles.inputsRow}>
        
        <Input label="Amount" style={styles.rowInput} textInputConfig={{
            keyboardType:"decimal-pad",
            onChangeText:inputChangeHandler.bind(this, "amount"),
            value:inputValues.amount
        }}  />
        
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
        <View style={styles.buttons}>
            <Button mode={"flat"} onPress={onCancel} style={styles.buttonStyle}>Cancel</Button>
            <Button onPress={submitHandler} style={styles.buttonStyle}>{submitButtonLabel}</Button>
        </View>
    </View>

}

export default ExpenseForm;

const styles=StyleSheet.create({
    inputsRow:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    rowInput:{
        flex:1,
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
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    buttonStyle:{
        minWidth:120,
        marginHorizontal:8
    }
});