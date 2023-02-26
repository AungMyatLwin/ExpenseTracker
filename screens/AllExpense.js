import { useContext } from "react";
import { View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";


function AllExpense(){
    const expensesCtx=useContext(ExpensesContext);
    return <View>
        <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.expenses} fallbackText="No register expenses found"/>
    </View>
}

export default AllExpense;