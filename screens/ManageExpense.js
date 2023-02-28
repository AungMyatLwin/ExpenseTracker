import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButtons from "../components/UI/IconButtons";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense } from "../util/http";
// import { useNavigation } from "@react-navigation/native";

function ManageExpense({route,navigation}){
    const editedExpenseId=route.params?.expenseId;
    const isEditing = !!editedExpenseId;
    const expensesCtx=useContext(ExpensesContext);
    const selectedExpense= expensesCtx.expenses.find((expense)=> expense.id===editedExpenseId);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: isEditing ? 'Edit Expense': 'Add Expense'
        });
    },[navigation, isEditing]);

    function cancelHandler(){
        navigation.goBack();
    };

  async  function confirmHandler(expenseData){
        if(isEditing){
            expensesCtx.updateExpense(editedExpenseId,expenseData);
        }
        else{
          const id = await storeExpense(expenseData)
            expensesCtx.addExpense({...expenseData, id:id })
        }
        navigation.goBack();
    };

    function deleteExpenseHandler(){
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    };

    return <View style={styles.container}>
        <ExpenseForm onCancel={cancelHandler}
        submitButtonLabel={isEditing? 'Update':'Add'}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
        />
        
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
    }
});