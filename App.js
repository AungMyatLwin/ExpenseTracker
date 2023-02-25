import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'

import { GlobalStyles } from './constants/styles';
import AllExpense from './screens/AllExpense';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';
import IconButton from './components/UI/IconButtons';
import ExpensesContextProvider from './store/expenses-context';

export default function App() {
  const Stack= createNativeStackNavigator();
  const Bottom= createBottomTabNavigator();
  console.log(IconButton)

  function ExpenseOverview(){
    return <Bottom.Navigator screenOptions={({navigation})=>({
      headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
      headerTintColor:'white',
      tabBarStyle:{ backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor:GlobalStyles.colors.accent500,
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="add"
          size={24}
          color={tintColor}
          onPress={() => {
            navigation.navigate('ManageExpense');
          }}
        />
      ),
    })
    }>
      <Bottom.Screen name="RecentExpense" component={RecentExpense} options={{
        title:"Recent Expense",
        tabBarLabel:"Recent",
        tabBarIcon:({color,size})=>{
          return <Ionicons name='hourglass' color={color} size={size}/>
        }
      }}/>
      <Bottom.Screen name="AllExpense" component={AllExpense} options={{
        title:"All Expense",
        tabBarLabel:"All Expense",
        tabBarIcon:({color,size})=> <Ionicons name='calendar' color={color} size={size}/>
      }}/>
    </Bottom.Navigator>
  }
  return <>
      <StatusBar style="inverted" />
      <ExpensesContextProvider>
      <NavigationContainer >
      <Stack.Navigator screenOptions={
        {
        headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
        headerTintColor:'white'
        }
      }>
      <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} options={
        {
          headerShown:false
        }
      }/>
      <Stack.Screen name='ManageExpense' component={ManageExpense} options={
        {
          presentation:'modal'
        }
      }  />
      </Stack.Navigator>
      </NavigationContainer>
      </ExpensesContextProvider>
    </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
