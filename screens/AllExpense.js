import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";


function AllExpense(){
    const expensesCtx=useContext(ExpensesContext);
    return <View style={styles.viewContainer}>
        <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.expenses} fallbackText="No register expenses found"/>
    </View>
}

export default AllExpense;
const styles=StyleSheet.create({
    viewContainer:{
        flex:1
    }
});