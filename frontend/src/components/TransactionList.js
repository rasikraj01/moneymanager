import React, {useEffect, useState} from 'react';
import SingleTransaction from './SingleTransaction';

function TransactionList(props) {

    
    return (
        <div>
            <h3>Previous Transactions</h3>
            <table>
                <thead>
                    <tr>
                        <td>title</td>
                        <td>date</td>
                        <td>category</td>
                        <td>type</td>
                        <td>amount</td>
                        <td>desc</td>
                    </tr>
                </thead>
                <tbody>
                    {props.transactions.map((transaction) => {
                        return <SingleTransaction key={transaction._id} transaction={transaction} />
                    })}
                </tbody>
            </table>
        </div>
  );
}

export default TransactionList;