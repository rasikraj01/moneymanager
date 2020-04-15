import React, {useEffect, useState} from 'react';
import SingleTransaction from './SingleTransaction';

function TransactionList(props) {
    console.log(props.transactions);
    
    return (
        <div>
            <h3>Previous Transactions</h3>
            <table>
            <tr>
                <td>title</td>
                <td>date</td>
                <td>category</td>
                <td>type</td>
                <td>amount</td>
                <td>desc</td>
            </tr>
                {props.transactions.map((transaction) => {
                    return <SingleTransaction key={transaction._id} transaction={transaction} />
                })}
            </table>
        </div>
  );
}

export default TransactionList;