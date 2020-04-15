import React, {useEffect, useState} from 'react';

function SingleTransaction(props) {
    let {title, date, category,type,amount, desc} = props.transaction
    return (
        <tr>
            <td>{title}</td>
            <td>{date}</td>
            <td>{category}</td>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{desc}</td>
        </tr>
  );
}

export default SingleTransaction;