import { createContext, useReducer } from 'react';

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


export const ExpensesContext= createContext({
    expenses:[],
    addExpense:({description, amount, date})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id, {description, amount, date})=>{},
});

function expensesReducer(state, action){
    switch(action.type){
        case 'ADD':
            const id= new Date().toString()+Math.random().toString();
            return [{...action.payload, id: id},...state];
        case 'UPDATE':
            const updatableExpenseIndex= state.findIndex((expense)=> expense.id=== action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updateItem={...updatableExpense, ...action.payload.data};
            const updatedExpenses=[...state];
            updatedExpenses[updatableExpenseIndex]=updateItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense)=> expense.id !== action.payload)
        default:
            return state;

    }
}

function ExpensesContextProvider({children}){
    const [expensesState, dispatch]=useReducer(expensesReducer, DUMMY_EXPENSE);

    function addExpense(expenseData){
        dispatch({ type:'ADD', payload: expenseData});
    }
    function deleteExpense(id){
        dispatch({type: 'DELETE', payload: id})
    }
    function updateExpense(id, expenseData){
        dispatch({type: 'UPDATE', payload:{
            id:id,
            data:expenseData
        }})
    }
    return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;