import React, {useState} from 'react';

function Expenses(){

    const [expenseName, setExpenseName] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");
    const [expenses, setExpenses] = useState([]);


    function handleAdd(){
        if(expenseName.trim() === ""){
            return;
        }
        if(expenseAmount.trim() === ""){
            return;
        }

        const newExpense = {
            id: Date.now(),
            name: expenseName,
            amount: Number(expenseAmount)
        }

        setExpenses([...expenses, newExpense])
        setExpenseName("");
        setExpenseAmount("");
    }

    function handleDelete(id){
        setExpenses(prev => prev.filter((expense) => expense.id !== id));
    }

    const total = expenses.reduce((sum, expense) => {
                    return sum + expense.amount}, 0)

    return(<div>
            <input 
            type="text"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            placeholder="Enter name..."
            />
            <input
            type="number"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            placeholder="Enter amount..."
            
            />
            <button
            onClick={handleAdd}>
                Add
            </button>

            <ol>
                {expenses.length === 0 ? 
                <p style={{color: "#484343"}}>
                    No expense yet...
                </p> : expenses.map((expense, id) => 
                <li key={id}>
                    <i
                    style={{color: "#595555"}}>Name: </i>{expense.name} --- <i
                    style={{color: "#595555"}}>Amount:</i> GHS{expense.amount}
                    --- <button onClick={() => handleDelete(expense.id)}>Delete</button>
                </li>)}
            </ol>
            <p>{expenses.length !== 0 && `Total expenses: ${total}`}</p>
           </div>);
}
export default Expenses;