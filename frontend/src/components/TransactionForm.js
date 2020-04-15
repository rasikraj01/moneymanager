import React, {useEffect, useState} from 'react';

function TransactionForm() {
    let [transactionFormData, setTransactionFormData] = useState({
        "title" : "",
        "date" : "",
        "category" : "",
        "type" : "",
        "amount" : "",
        "desc" : ""
    })

    let [formError, setFormError] = useState({
        isError: false,
        errorMessage : ""
    })

    const handleInputChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setTransactionFormData((transactionFormData) => {
            transactionFormData[name] = value
            return transactionFormData
        })
    }
    const handleTransactionFormSubmit = (e) => {
        e.preventDefault()
        console.log(transactionFormData)
    }
    return (
        <div>
            <h2>Add Transcation</h2>
            <form onSubmit={handleTransactionFormSubmit}>
                <input type="text" name="title" onChange={handleInputChange}/><br/>
                <input type="date" name="date" onChange={handleInputChange}/><br/>
                <select name="category" onChange={handleInputChange}>
                    <option value="fun">Fun</option>
                    <option value="food"> Food</option>
                    <option value="education">Education</option>
                    <option value="clothing">Clothing</option>
                    <option value="invetment">Investment</option>
                    <option value="interest">Interest</option>
                    <option value="vacation">Vacation</option>
                    <option value="salary"> Salary</option>
                    <option value="rent">Rent</option>
                    <option value="subscription">Subscription</option>
                </select><br/>
                <input type="radio" name="type" value="income" onChange={handleInputChange}/> income <br/>
                <input type="radio" name="type" value="expense" onChange={handleInputChange}/> expenditure<br/>
                <input type="text" name="amount" placeholder="amount" onChange={handleInputChange}/><br/>
                <input type="text" name="desc" placeholder="description" onChange={handleInputChange}/><br/>
                {formError.isError && <p>{formError.errorMessage}</p>}
                <input type="submit" name="submit"/>
            </form>
        </div>
  );
}

export default TransactionForm;