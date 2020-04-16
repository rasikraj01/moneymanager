import React, {useEffect, useState, useRef} from 'react';
import Chart from 'chart.js';
import moment from 'moment';

function LineGraph(props) {
    const myRef = useRef(null)
    //function to sort object by keys
    const sortObject = o => Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {})

    // expense data object init
    let expense_data = {}
    for(let i = 0; i < props.expense.length; i++){
        let date = props.expense[i].date
        if(date in expense_data){
            expense_data[date] += props.expense[i].amount 
        }else{
            expense_data[date] = props.expense[i].amount
        }
    }

    // income data object init
    let income_data = {}
    for(let i = 0; i < props.income.length; i++){
        let date = props.income[i].date
        if(date in income_data){
            income_data[date] += props.income[i].amount 
        }else{
            income_data[date] = props.income[i].amount
        }
    }

    // data labels fetched
    let data_labels = new Set();
    props.expense.forEach(item => {
        data_labels.add(item.date)
    });
    props.income.forEach(item => {
        data_labels.add(item.date)
    });
    // data labels converted into array
    let data_labels_Arr = [...data_labels].sort()

    
    
    for(let i = 0 ; i < data_labels_Arr.length; i++){
        if (!(data_labels_Arr[i] in income_data)){
            income_data[data_labels_Arr[i]] = 0
        }
    }

    for(let i = 0 ; i < data_labels_Arr.length; i++){
        if (!(data_labels_Arr[i] in expense_data)){
            expense_data[data_labels_Arr[i]] = 0
        }
    }
    
    // convert data labels time format to MMM YY --> Jan 20 
    data_labels_Arr.forEach(function(item, index) {
         this[index] = moment(item).format('MMM YY')
    }, data_labels_Arr)

    useEffect(() => {
        const myChartRef = myRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: data_labels_Arr,
                datasets: [
                    {
                        label: "expense",
                        data: Object.values(sortObject(expense_data)), // sort and grab values
                        backgroundColor: '#FF6384',
                    },
                    {
                        label: "income",
                        data: Object.values(sortObject(income_data)), // sort and grab values
                        backgroundColor: '#36A2EB'
                    }
                ]
            },
            options: {
                
            }
        });
    },[income_data, expense_data, data_labels])
    return (
        <div>
            <canvas id="my-chart" ref={myRef}/>
        </div>
  );
}

export default LineGraph;