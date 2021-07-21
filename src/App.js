import './App.css';
import React, { useState, useEffect } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import { v4 as uuidv4, v4 } from 'uuid';


//const initialExpenses = [
// { id: v4(), charge: "rent", amount: 2000 },
// { id: v4(), charge: "car payment", amount: 5000 },
//  { id: v4(), charge: "credit card bill", amount: 3000 }
//]
const initialExpenses = localStorage.getItem("expenses") ?
  JSON.parse(localStorage.getItem("expenses")) : [];


function App() {

  const [expenses, setExpenses] = useState(initialExpenses);

  const [charge, setCharge] = useState("");

  const [amount, setAmount] = useState("");

  const [alert, setAlert] = useState({ show: false });

  const [edit, setEdit] = useState(false);

  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem("espenses", JSON.stringify(expenses));
  }
  )

  const handleCharge = e => {
    setCharge(e.target.value);
  }

  const handleAmount = e => {
    setAmount(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: v4(), charge, amount }
      setExpenses([...expenses, singleExpense]);
      setCharge("");
      setAmount("");
    } else {
      //handle alert call
    }

  }

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm charge={charge} amount={amount}
          handleCharge={handleCharge} handleAmount={handleAmount}
          handleSubmit={handleSubmit} />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending: <span className="total">
          $
          {expenses.reduce((acc, curr) => {
        return (acc += parseInt(curr.amount));
      }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
