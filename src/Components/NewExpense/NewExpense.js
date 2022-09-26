import React from "react";

import ExpenseForm from "./ExpenseForm";
import ExpenseFilter from "./ExpenseFilter";
import './NewExpense.css';

const NewExpense = () => {
  return (
    <div className="new-expense">
       
      <ExpenseForm />
    
    </div>
  );
};

export default NewExpense;
