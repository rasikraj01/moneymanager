import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';

import BarGraph from './LineGraph';
import TransactionForm from './TransactionForm';
import ExpenseChart from './ExpenseChart';
import TransactionList from './TransactionList';
import ExpenseCalendar from './ExpenseCalendar';

function Dashboard(props) {
    let [transactions, setTransaction] = useState([
        {
            "_id": "5e7bdb28a604e4034aaffbe3",
            "user": "5e7bd1a7a4475a84d00faf80",
            "title": "mac",
            "date": "2020-03-25T22:23:49.730Z",
            "category": "fun",
            "type": "expense",
            "amount": 1000,
            "desc": "got a laptop",
            "__v": 0
        },
        {
            "_id": "5e7c6f2a2e57c20765bd6cd4",
            "user": "5e7bd1a7a4475a84d00faf80",
            "title": "houes rent",
            "date": "2020-03-25T22:23:49.730Z",
            "category": "rent",
            "type": "expense",
            "amount": 10000,
            "desc": "why do i pay this much rent",
            "__v": 0
        },
        {
            "_id": "5e7c6f3b2e57c20765bd6cd5",
            "user": "5e7bd1a7a4475a84d00faf80",
            "title": "houes rent",
            "date": "2020-03-25T22:23:49.730Z",
            "category": "test",
            "type": "expense",
            "amount": 10000,
            "desc": "why do i pay this much rent",
            "__v": 0
        },
        {
            "_id": "5e7c6f512e57c20765bd6cd6",
            "user": "5e7bd1a7a4475a84d00faf80",
            "title": "houes rent",
            "date": "2020-03-25T22:23:49.730Z",
            "category": "test",
            "type": "dick",
            "amount": 10000,
            "desc": "why do i pay this much rent",
            "__v": 0
        },
        {
            "_id": "5e7c6f78a7470107972b6340",
            "user": "5e7bd1a7a4475a84d00faf80",
            "title": "houes rent",
            "date": "2020-03-25T22:23:49.730Z",
            "category": "test",
            "type": "noi",
            "amount": 10000,
            "desc": "why do i pay this much rent",
            "__v": 0
        },
        {
            "_id": "5e7c6f89a7470107972b6341",
            "user": "5e7bd1a7a4475a84d00faf80",
            "title": "houes rent",
            "date": "2020-03-25T22:23:49.730Z",
            "category": "fun",
            "type": "noi",
            "amount": 10000,
            "desc": "why do i pay this much rent",
            "__v": 0
        },
        {
            "_id": "5e7c6fa305c18907a6c90cf0",
            "user": "5e7bd1a7a4475a84d00faf80",
            "title": "houes rent",
            "date": "2020-03-25T22:23:49.730Z",
            "category": "desk",
            "type": "income",
            "amount": 10000,
            "desc": "why do i pay this much rent",
            "__v": 0
        },
        {
            "_id": "5e97820d2f1f9400047f5d5d",
            "user": "5e7bd1a7a4475a84d00faf80",
            "title": "houes rent",
            "date": "2020-03-25T22:23:49.730Z",
            "category": "desk",
            "type": "income",
            "amount": 10000,
            "desc": "salary aa gayii",
            "__v": 0
        },
        {
            "_id": "5e97821b2f1f9400047f5d5e",
            "user": "5e7bd1a7a4475a84d00faf80",
            "title": "houes rent",
            "date": "2020-03-25T22:23:49.730Z",
            "category": "salary",
            "type": "income",
            "amount": 10000,
            "desc": "salary aa gayii",
            "__v": 0
        },
        {
            "_id": "5e97821b2f1f9401047f5d5e",
            "user": "5e7bd1a7a4475a84d00faf80",
            "title": "money",
            "date": "2020-01-25T22:23:49.730Z",
            "category": "salary",
            "type": "income",
            "amount": 5000,
            "desc": "freelancing",
            "__v": 0
        },
        {
            "_id": "5e9782912f1f9400047f5d5f",
            "user": "5e7bd1a7a4475a84d00faf80",
            "title": "houes rent",
            "date": "2020-04-15T21:54:43.556Z",
            "category": "fun",
            "type": "expense",
            "amount": 500,
            "desc": "desi daru",
            "__v": 0
        }
    ])

    let expense = transactions.filter((transaction) => {
        return transaction.type === "expense"
    })

    let income = transactions.filter((transaction) => {
        return transaction.type === "income"
    })

    return (
        <div>
            {/* {!props.isLoggedIn && (<Redirect to="/login" />)} */}
            <BarGraph expense={expense} income={income} />
            <TransactionForm/>
            <ExpenseChart expense={expense} />
            <TransactionList transactions={transactions}/>
            <ExpenseCalendar/>
        </div>
  );
}

export default Dashboard;