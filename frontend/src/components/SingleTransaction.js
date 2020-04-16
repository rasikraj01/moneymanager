import React, {useEffect, useState} from 'react';
import moment from 'moment';

function SingleTransaction(props) {
    let {title, date, category,type,amount, desc} = props.transaction
    return (
        <tr>
            <td>{title}</td>
            <td>{moment(date).format('DD-MM-YYYY')}</td>
            <td>{category}</td>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{desc}</td>
        </tr>
  );
}

export default SingleTransaction;