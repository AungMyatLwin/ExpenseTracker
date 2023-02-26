import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButtons from "../components/UI/IconButtons";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
// import { useNavigation } from "@react-navigation/native";

function ManageExpense({route,navigation}){
    const editedExpenseId=route.params?.expenseId;
    const isEditing = !!editedExpenseId;
    const expensesCtx=useContext(ExpensesContext);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: isEditing ? 'Edit Expense': 'Add Expense'
        });
    },[navigation, isEditing]);

    function cancelHandler(){
        navigation.goBack();
    };

    function confirmHandler(){
        if(isEditing){
            expensesCtx.updateExpense(editedExpenseId,{description:'test', amount:19.99, date: new Date('2023-02-28')});
        }
        else{
            expensesCtx.addExpense({description:'test', amount:19.99, date: new Date('2023-02-28')})
        }
        navigation.goBack();
    };

    function deleteExpenseHandler(){
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    };

    return <View style={styles.container}>
        <View style={styles.buttons}>
            <Button mode={"flat"} onPress={cancelHandler} style={styles.buttonStyle}>Cancel</Button>
            <Button onPress={confirmHandler} style={styles.buttonStyle}>{isEditing? "Update" : "Add"}</Button>
        </View>
        {isEditing && (
            <View style={styles.deleteContainer}>
                <IconButtons 
                icon={"trash"} 
                color={GlobalStyles.colors.error500} 
                size={36} 
                onPress={deleteExpenseHandler}
                />
            </View>
        )}
    </View>
}

export default ManageExpense;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer:{
        marginTop:16,
        padding:8,
        borderTopWidth:2,
        borderTopColor:GlobalStyles.colors.primary200,
        alignItems:"center",
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