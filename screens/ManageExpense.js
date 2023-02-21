import { useLayoutEffect } from "react";
import { Text } from "react-native";
// import { useNavigation } from "@react-navigation/native";

function ManageExpense({route,navigation}){
    const editedExpenseId=route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: isEditing ? 'Edit Expense': 'Add Expense'
        });
    },[navigation, isEditing]);
    return <Text>Managing Expense</Text>
}

export default ManageExpense;