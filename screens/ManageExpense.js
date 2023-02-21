import { useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import IconButtons from "../components/UI/IconButtons";
import { GlobalStyles } from "../constants/styles";
// import { useNavigation } from "@react-navigation/native";

function ManageExpense({route,navigation}){
    const editedExpenseId=route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: isEditing ? 'Edit Expense': 'Add Expense'
        });
    },[navigation, isEditing]);

    function deleteExpenseHandler(){}
    return <View style={styles.container}>

        {isEditing && (
            <View style={styles.deleteContainer}>
                <IconButtons 
                icon={"trash"} 
                color={GlobalStyles.colors.error500} 
                size={36} 
                onPress={deleteExpenseHandler}
                />
            </View>
        )}
    </View>
}

export default ManageExpense;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer:{
        marginTop:16,
        padding:8,
        borderTopWidth:2,
        borderTopColor:GlobalStyles.colors.primary200,
        alignItems:"center",

    }
});