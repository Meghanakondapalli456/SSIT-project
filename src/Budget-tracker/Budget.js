
import styles from './Budget.module.css'
import React, { useState } from 'react';
const Budget = () => {
  const [income, setIncome]=useState([]);
  const [expenses, setExpenses]=useState([]);
  const [balance, setBalance]=useState(0);
  const [entry ,setEntry]=useState({title:"",amount:"",type:""});
    
  const remainingbalance=() =>{
  const totalincome=income.reduce((sum,entry)=>sum+entry.amount,0);
  const totalexpenses=expenses.reduce((sum,entry)=>sum+entry.amount,0);
  setBalance(totalincome-totalexpenses);
  };
  const handelAddEntry=() =>{
    if(!entry.title||!entry.amount)
      return
    const newEntry ={
      title:entry.title,
      amount:entry.amount,
      date:new Date(),
  }
  if(entry.type === "income")
  {
    setIncome ([...income,newEntry]);
    setExpenses ([...expenses,newEntry]);

  }
  setEntry({title:"",amount:"",type:""});
remainingbalance();


  const handelDeleteEntry=(type,index)=>{
    if(type==="income") {
     const updatedIncome =[
      ...income.slice(0,index),
      ...income.slice(index+1)
     ]
    setIncome(updatedIncome)}
     else { 
      const updatedExpenses=[
        ...expenses.slice(0,index),
      ...expenses.slice(index+1)
      ];
      setExpenses(updatedExpenses)
     }
     remainingbalance();
    }
  
  return (
    <div>
      <h1>Personal Budget Tracker</h1>
      <h3>Balance:${balance}</h3>
      <div className={styles.financial}>
        <div>
          <h3>Income</h3>
          {income.map((item,index)=>(
            <div key={index}>
              <p>{item.title}:${item.amount}</p>
              <button onClick={() => handelDeleteEntry("income", index)}>delete</button>
            </div>
          )
          )}
        </div>
        <div>
          <h3>Expenses</h3>
          {expenses.map((item,index)=>(
            <div key={index}>
              <p>{item.title}:${item.amount}</p>
              <button onClick={() => handelDeleteEntry("expenses", index)}>delete</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
  }
}
export default Budget;