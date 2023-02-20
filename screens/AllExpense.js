import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpense(){
    return <View>
        <ExpensesOutput expensesPeriod="Total"/>
    </View>
}

export default AllExpense;