import React, {useEffect, useState} from 'react';


import LineGraph from './LineGraph';
import TransactionForm from './TransactionForm';
import ExpenseChart from './ExpenseChart';
import TransactionList from './TransactionList';
import ExpenseCalendar from './ExpenseCalendar';

function Dashboard() {

    return (
        <div>
            <LineGraph/>
            <TransactionForm/>
            <ExpenseChart/>
            <TransactionList/>
            <ExpenseCalendar/>
        </div>
  );
}

export default Dashboard;