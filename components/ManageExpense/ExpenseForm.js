import { View } from "react-native";
import Input from "./Input";

function ExpenseForm(){
    function amountChangeHandler(){

    }
    return <View>
        <Input label="Amount" textInputConfig={{
            keyboardType:"decimal-pad",
            onChangeText:amountChangeHandler,
        }}/>
        <Input label="Date" textInputConfig={{
            onChangeText:()=>{},
            placeholder:"YYYY-MM-DD",
            maxLength:10,
        }}/>
        <Input label="Description"textInputConfig={{
            multiLine: true,
        }}/>
    </View>

}

export default ExpenseForm;