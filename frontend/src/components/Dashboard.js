import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';

import BarGraph from './BarGraph';
import TransactionForm from './TransactionForm';
import ExpenseChart from './ExpenseChart';
import TransactionList from './TransactionList';
import ExpenseCalendar from './ExpenseCalendar';

import Axios from 'axios';


function Dashboard(props) {
    let [transactions, setTransaction] = useState([])

    let expense = transactions.filter((transaction) => {
        return transaction.type === "expense"
    })

    let income = transactions.filter((transaction) => {
        return transaction.type === "income"
    })

    
    
    useEffect(() => {
        
        let headers = {
            'auth-token' : localStorage.getItem('auth-token')
        }
        Axios
            .get('/transaction/', {headers: headers})
            .then((data)=>{
                setTransaction(data.data)
            })
            .catch((err) => {
                console.log(err);
            })
            
        }, [])

    return (
        <div>
            {/* {!props.isLoggedIn && (<Redirect to="/login" />)} */}
            <BarGraph expense={expense} income={income} />
            <TransactionForm setTransaction={setTransaction}/>
            <ExpenseChart expense={expense} />
            <TransactionList transactions={transactions}/>
            <ExpenseCalendar/>
        </div>
  );
}

export default Dashboard;