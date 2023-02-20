import { View } from "react-native";
import ExpenseList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSE=[
    {
        id:'e1',
        description:'A pair of shoes',
        amount: 59.99,
        date:new Date('2023-02-20')
    },{
        id:'e2',
        description:'A pair of trousers',
        amount: 5.99,
        date: new Date('2021-12-01')
    },{
        id:'e3',
        description:'48 Laws of Power',
        amount:13.99,
        date:new Date('2023-02-21')
    }
]
function ExpensesOutput({expenses, expensesPeriod}){
    return <View>
        <ExpensesSummary expenses={DUMMY_EXPENSE} periodName={expensesPeriod}/>
        <ExpenseList expenses={DUMMY_EXPENSE}/>
    </View>
}

export default ExpensesOutput;