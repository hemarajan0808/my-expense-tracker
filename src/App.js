import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/Expenses/ExpenseItem';
import NewExpense from './Components/NewExpense/NewExpense';
import ExpenseFilter from './Components/NewExpense/ExpenseFilter';




function App() {
  const expenses =[
    {id:'e1',title: 'Car Insurance', amount: 295.97, date: new Date(2021, 3, 26)} ,
    {id:'e2',title: 'Home Insurance', amount: 300.86, date:new Date(2022,7, 18)},
    {id:'e3',title: 'Health Insurance', amount: 567.86, date:new Date(2022,9, 3)},
    {id:'e4',title: 'Pet Insurance', amount: 255.86, date:new Date(2022,2, 29)}
  ];
  return (
    <div className="App">

      <NewExpense />
      <ExpenseFilter />
      
      
       <ExpenseItem title ={expenses[0].title} amount = {expenses[0].amount} date={expenses[0].date}/> 
       <ExpenseItem title={expenses[1].title} amount ={expenses[1].amount} date={expenses[1].date}/>
       <ExpenseItem title={expenses[2].title} amount ={expenses[2].amount} date={expenses[2].date}/>
       <ExpenseItem title={expenses[3].title} amount ={expenses[3].amount} date={expenses[3].date}/>
    </div>
  );
}

export default App;
