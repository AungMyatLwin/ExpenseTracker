import axios from "axios";

export function storeExpense(expenseData){
    axios.post('https://dummyproject-607fd-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json', expenseData);
}
