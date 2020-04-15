import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';

import LineGraph from './LineGraph';
import TransactionForm from './TransactionForm';
import ExpenseChart from './ExpenseChart';
import TransactionList from './TransactionList';
import ExpenseCalendar from './ExpenseCalendar';

function Dashboard(props) {

    return (
        <div>
            {/* {!props.isLoggedIn && (<Redirect to="/login" />)} */}
            <LineGraph/>
            <TransactionForm/>
            <ExpenseChart/>
            <TransactionList/>
            <ExpenseCalendar/>
        </div>
  );
}

export default Dashboard;