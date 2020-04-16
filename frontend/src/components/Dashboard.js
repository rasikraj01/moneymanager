import React, {useEffect, useState} from 'react';
import { Redirect, Link } from 'react-router-dom';
import Axios from 'axios';

import BarGraph from './BarGraph';
import TransactionForm from './TransactionForm';
import ExpenseChart from './ExpenseChart';
import TransactionList from './TransactionList';

import '../scss/dashboard.scss';

const parseJwt =  (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function Dashboard(props) {
    let [transactions, setTransaction] = useState([])
    let [username, setUsername] = useState("")

    let expense = transactions.filter((transaction) => {
        return transaction.type === "expense"
    })

    let income = transactions.filter((transaction) => {
        return transaction.type === "income"
    })

    
    
    useEffect(() => {

        const CancelToken = Axios.CancelToken;
        const source = CancelToken.source();

        // fetch transaction from db
        const loadData = () => {
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
        
        const getUserName = async () => {
            await setUsername(() => {
                let payload = parseJwt(localStorage.getItem('auth-token'))
                return payload.name
            })
        }
        getUserName();

        return () => {
            source.cancel();
        };
            
        }, [])

    return (
        <div className="dashboard">
            {!props.isLoggedIn && (<Redirect to="/login" />)}
            <div className="topbar">
                <div className="username">User : {username}</div>
                <h2 className="appname">Moneymngr</h2>
                <div className="logout"><Link to="/logout">Logout</Link></div>
            </div>
            <BarGraph expense={expense} income={income} />
            <ExpenseChart expense={expense} />
            <TransactionList transactions={transactions}/>
            <TransactionForm setTransaction={setTransaction}/>
        </div>
  );
}

export default Dashboard;