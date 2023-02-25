import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";


function AllExpense(){
    const expensesCtx=useContext(ExpensesContext);
    return <View>
        <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.expenses}/>
    </View>
}

export default AllExpense;