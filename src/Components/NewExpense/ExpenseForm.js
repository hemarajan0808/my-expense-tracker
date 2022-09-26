import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [title,setTitle]=useState('');
    const [amount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const titleChangeHandler =(e)=>{
        setTitle(e.target.value);
    }
    const amountChangeHandler =(e)=>{
        setAmount(e.target.value)
    }

    const dateChangeHandler =(e)=>{
        setDate(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault();

        const expenseData ={
            title: title,
            amount: amount,
            date: new Date(enteredDate),
        }
        console.log(expenseData)
        setTitle('');
        setAmount('');
        setDate('');

    }
  return (
   
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title </label>
          <input type="text" onChange={titleChangeHandler} value={title}/>
        </div>
        <div className="new-expense__control">
          <label>Amount </label>
          <input type="number" min="1" max="100" value={amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type='date' min='2018-01-01' max ='2022-12-31' value={enteredDate} onChange = {dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
        <button type="submit"> Add Expense  </button>
        </div >
            
        </div>
     
    </form>
    
  );
};

export default ExpenseForm;
