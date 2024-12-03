import styles from "./Budget.module.css";
import React, { useState, useEffect } from "react";



const Budget = () => {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);
  const [entry, setEntry] = useState({ title: "", amount: "", type: "" });
  const [editingindex, setEditingindex] = useState(null);
  const [editingtype, setEditingtype] = useState("");

  const remainingBalance = () => {
    const totalincome = income.reduce(
      (sum, entry) => sum + parseFloat(entry.amount),
      0
    );
    const totalexpenses = expenses.reduce(
      (sum, entry) => sum + parseFloat(entry.amount),
      0
    );
    setBalance(totalincome - totalexpenses);
  };
  const handleAddEntry = () => {
    if (!entry.title || !entry.amount) return;
    const newEntry = {
      title: entry.title,
      amount: parseFloat(entry.amount),
      date: new Date(),
    };
    if (entry.type === "income") {
      setIncome([...income, newEntry]);
    } else {
      setExpenses([...expenses, newEntry]);
    }
    setEntry({ title: "", amount: "", type: "" });
    remainingBalance();
  };

  const handleDeleteEntry = (type, index) => {
    if (type === "income") {
      const updatedIncome = [
        ...income.slice(0, index),
        ...income.slice(index + 1),
      ];
      setIncome(updatedIncome);
    } else {
      const updatedExpenses = [
        ...expenses.slice(0, index),
        ...expenses.slice(index + 1),
      ];
      setExpenses(updatedExpenses);
    }
    remainingBalance();
  };
  useEffect(() => {
    remainingBalance();
  }, [income, expenses]);

  const handleReset = () => {
    setIncome([]);
    setExpenses([]);
    setBalance(0);
    setEntry({ title: "", amount: "", type: "" });
    setEditingindex(null); 
  setEditingtype("");  
  };
  const handleEditEntry = (index, type) => {
    const entryToEdit = type === "income" ? income[index] : expenses[index];
    setEntry({ ...entryToEdit });
    setEditingindex(index);
    setEditingtype(type);
  };

  const handelUpdateEntry = () => {
    if (!entry.title || !entry.amount) return;

    const updatedEntry = { ...entry, amount: parseFloat(entry.amount) };
    if (editingtype === "income") {
      const updatedIncome = [...income];
      updatedIncome[editingindex] = updatedEntry;
      setIncome(updatedIncome);
    } else {
      const updatedExpenses = [...expenses];
      updatedExpenses[editingindex] = updatedEntry;
      setExpenses(updatedExpenses);
    }
    setEditingindex(null);
    setEditingtype("");
    setEntry({ title: "", amount: "", type: "" });
    remainingBalance();
  };

  return (
    <div>
      <h1>Personal Budget Tracker</h1>
      <h2>Balance:${balance}</h2>
      <div className={styles.financial}>
        <div>
          <h3>Income</h3>
          {income.map((item, index) => (
            <div key={index}>
              <p>
                {item.title}:${item.amount}
              </p>
              <button onClick={() => handleEditEntry("income", index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <div>
          <h3>Expenses</h3>
          {expenses.map((item, index) => (
            <div key={index}>
              <p>
                {item.title}:${item.amount}
              </p>
              <button onClick={() => handleDeleteEntry("expenses", index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="title"
          value={entry.title}
          onChange={(e) => setEntry({ ...entry, title: e.target.value })}
        />
        <input
          type="number"
          placeholder="amount"
          value={entry.amount}
          onChange={(e) => setEntry({ ...entry, amount: e.target.value })}
        />
        <select
          value={entry.type}
          onChange={(e) => setEntry({ ...entry, type: e.target.value })}
        >
          <option value="">Select Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <div className={styles.buttonGroup}>
        <button onClick={editingindex !== null ? handelUpdateEntry : handleAddEntry}>
            {editingindex !== null ? "Update" : "Add"}
          </button>
          
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};
export default Budget;
