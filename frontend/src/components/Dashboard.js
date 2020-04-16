import React, {useEffect, useState} from 'react';
import { Redirect, Link } from 'react-router-dom';
import Axios from 'axios';

import BarGraph from './BarGraph';
import TransactionForm from './TransactionForm';
import ExpenseChart from './ExpenseChart';
import TransactionList from './TransactionList';

import '../scss/dashboard.scss';
import Logout from './Logout';

function Dashboard(props) {
    let [transactions, setTransaction] = useState([])

    let expense = transactions.filter((transaction) => {
        return transaction.type === "expense"
    })

    let income = transactions.filter((transaction) => {
        return transaction.type === "income"
    })

    
    
    useEffect(() => {
        const CancelToken = Axios.CancelToken;
        const source = CancelToken.source();

        const loadData = () =>{

           
            let headers = {
                'auth-token' : localStorage.getItem('auth-token')
            }
            Axios
                .get('/transaction/', {headers: headers, cancelToken: source.token })
                .then((data)=>{
                    setTransaction(data.data)
                })
                .catch( (err) => {
                    if(Axios.isCancel(err)){
                        console.log('cancelled')
                    }else{
                        console.log(err);   
                    }
                })
        }
        loadData();

        return () => {
            source.cancel();
        };
            
        }, [])

    return (
        <div className="dashboard">
            {!props.isLoggedIn && (<Redirect to="/login" />)}
            <Link to="/logout">Logout</Link>
            <BarGraph expense={expense} income={income} />
            <ExpenseChart expense={expense} />
            <TransactionList transactions={transactions}/>
            <TransactionForm setTransaction={setTransaction}/>
        </div>
  );
}

export default Dashboard;