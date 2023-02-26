import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Input from "./Input";

function ExpenseForm(){
    function amountChangeHandler(){

    }
    return <View>
        <View>
        <Input label="Amount" textInputConfig={{
            keyboardType:"decimal-pad",
            onChangeText:amountChangeHandler,
        }}/>
        <Input label="Date" textInputConfig={{
            onChangeText:()=>{},
            placeholder:"YYYY-MM-DD",
            maxLength:10,
        }}/>
        </View>
        <Input label="Description"textInputConfig={{
            multiLine: true,
        }}/>
    </View>

}

export default ExpenseForm;

const styles=StyleSheet.create({

});