
import React, { useState } from "react";


function Budget() {
  const [transactions, setTransactions] = useState([]);
  const [inputData, setInputData] = useState({ description: "", amount: "" });

  const addTransaction = (type) => {
    if (!inputData.description || !inputData.amount) {
      alert("Please fill in all fields!");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description: inputData.description,
      amount: type === "income" ? +inputData.amount : -inputData.amount,
    };

    setTransactions([...transactions, newTransaction]);
    setInputData({ description: "", amount: "" });
  };

  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  return (
    <div className="app">
      <h1>Budget Tracker</h1>
      <div className="balance">
        <h2>Balance: ₹{calculateBalance()}</h2>
      </div>

      <div className="transaction-form">
        <input
          type="text"
          placeholder="Description"
          value={inputData.description}
          onChange={(e) => setInputData({ ...inputData, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={inputData.amount}
          onChange={(e) => setInputData({ ...inputData, amount: e.target.value })}
        />
        <button onClick={() => addTransaction("income")}>Add Income</button>
        <button onClick={() => addTransaction("expense")}>Add Expense</button>
      </div>

      <div className="transactions">
        <h3>Transaction History</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className={transaction.amount > 0 ? "income" : "expense"}>
              {transaction.description} - ₹{Math.abs(transaction.amount)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Budget;
