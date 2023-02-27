
import { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";


function RecentExpense(){
    const expensesCtx=useContext(ExpensesContext);
    
    useEffect(()=>{
         async function getExpenses(){
           const expense= await fetchExpenses();
           expensesCtx.setExpense(expense)
        }
        getExpenses();
    },[])
    const recentExpenses= expensesCtx.expenses.filter((expense)=>{
        const today= new Date();
        const days7DaysAgo= getDateMinusDays(today,7);

        return  expense.date>days7DaysAgo;
    })
    return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallbackText="No Expenses Register"/>
}

export default RecentExpense;