import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpenseList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSE=[
    {
        id:'e1',
        description:'A pair of shoes',
        amount: 59.99,
        date:new Date('2023-02-20')
    },
    {
        id:'e2',
        description:'A pair of trousers',
        amount: 5.99,
        date: new Date('2021-12-01')
    },
    {
        id:'e3',
        description:'48 Laws of Power',
        amount:13.99,
        date:new Date('2023-02-21')
    }
];
function ExpensesOutput({expenses, expensesPeriod}){
    return <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSE} periodName={expensesPeriod}/>
        <ExpenseList expenses={DUMMY_EXPENSE}/>
    </View>
}

export default ExpensesOutput;

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:GlobalStyles.colors.primary700,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0
    }
});