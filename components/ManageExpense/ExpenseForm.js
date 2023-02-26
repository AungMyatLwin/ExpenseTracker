import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import Button from "../UI/Button";

import Input from "./Input";

function ExpenseForm({submitButtonLabel, onCancel, onSubmit, defaultValues}){
    const [inputs, setInputs]=useState({
        amount:{
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
    },
        date:{
            value:defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true
        },
        description:{
            value:defaultValues ? defaultValues.description : '',
            isValid: true
        }
    });
    function inputChangeHandler(inputIndentifier,enteredValue){
        setInputs((curInput)=>{
            return{
                ...curInput,
                [inputIndentifier]:{value:enteredValue, isValid: true}
            }
        });
    }
    function submitHandler(){
        const expenseData= {
            amount: +inputs.amount,
            date: new Date(inputs.date),
            description: inputs.description
        };
        const amountIsValid=!isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !=='Invalid Date';
        const descriptionIsValid= expenseData.description.trim().length>0;
        if(!amountIsValid || !dateIsValid || !descriptionIsValid )
        {
            // Alert.alert('Invalid input' , 'Please check your input values');
            setInputs((curInputs)=>{
                return {
                    amount: {value: curInputs.amount.value, isValid: amountIsValid},
                    date: {value: curInputs.date.value, isValid: dateIsValid},
                    description: {value: curInputs.description.value, isValid: descriptionIsValid},
                }
            })
            return;
        }

        onSubmit(expenseData);
    }
    const formIsValid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

    return <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>

        <View style={styles.inputsRow}>
        
        <Input label="Amount" style={styles.rowInput} textInputConfig={{
            keyboardType:"decimal-pad",
            onChangeText:inputChangeHandler.bind(this, "amount"),
            value:inputs.amount
        }}  invalid={!inputs.amount.isValid}/>
        
        <Input label="Date" textInputConfig={{
            onChangeText:inputChangeHandler.bind(this, "date"),
            value:inputs.date,
            placeholder:"YYYY-MM-DD",
            maxLength:10,
        }} style={styles.rowInput}
        invalid={!inputs.date.isValid}
        />
        
        </View>
        {formIsValid && (
        <Text style={styles.error}>
            Invalid input values - please check your entered data!
        </Text>)}
        <Input label="Description"textInputConfig={{
            multiLine: true,
            onChangeText:inputChangeHandler.bind(this, "description"),
            value:inputs.description
        }} invalid={!inputs.description.isValid}
        />
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
    },
    error:{
        textAlign:'center',
        color: GlobalStyles.colors.error500,
        margin:8
    }
});