import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpenseList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";


function ExpensesOutput({expenses, expensesPeriod}){
    return <View style={styles.container}>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
        <ExpenseList expenses={expenses}/>
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