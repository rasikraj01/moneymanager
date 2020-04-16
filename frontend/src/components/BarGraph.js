import React, {useEffect, useState, useRef} from 'react';
import Chart from 'chart.js';
import moment from 'moment';
import { Bar } from 'react-chartjs-2';


// aprrr yet to fix

function BarGraph(props) {
    // const myRef = useRef(null)
    
    //function to sort object by keys
    const sortObject = o => Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {})

    // expense data object init
    let expense_data = {}
    let dates = new Set()
    for(let i = 0; i < props.expense.length; i++){
        let date = moment(props.expense[i].date).format('M')
        dates.add(date)
        if(date in expense_data){
            expense_data[date] += props.expense[i].amount 
        }else{
            expense_data[date] = props.expense[i].amount
        }
    }

    // income data object init
    let income_data = {}
    for(let i = 0; i < props.income.length; i++){
        let date = moment(props.income[i].date).format('M')
        dates.add(date)
        if(date in income_data){
            income_data[date] += props.income[i].amount 
        }else{
            income_data[date] = props.income[i].amount
        }
    }

    // data labels converted into array
    let data_labels_Arr = [...dates].sort()

    
    
    for(let i = 0 ; i < data_labels_Arr.length; i++){
        let month = moment(data_labels_Arr[i]).format('M')
        if (!(month in income_data)){
            income_data[month] = 0
        }
    }
    for(let i = 0 ; i < data_labels_Arr.length; i++){
        let month = moment(data_labels_Arr[i]).format('M')
        if (!(month in expense_data)){
            expense_data[month] = 0
        }
    }
    
    // convert data labels time format to MMM YY --> Jan 20 
    // data_labels_Arr.forEach(function(item, index) {
    //      this[index] = moment(item).format('MMM YY')
    // }, data_labels_Arr)

    let bar_chart_data={
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
    }
    let bar_chart_options = {
        // responsive : true,
        maintainAspectRatio: false
    }
    // useEffect(() => {
    //     const myChartRef = myRef.current.getContext("2d");
    //     new Chart(myChartRef, {
    //         type: "bar",
    //         data: {
    //             //Bring in data
    //             labels: data_labels_Arr,
    //             datasets: [
    //                 {
    //                     label: "expense",
    //                     data: Object.values(sortObject(expense_data)), // sort and grab values
    //                     backgroundColor: '#FF6384',
    //                 },
    //                 {
    //                     label: "income",
    //                     data: Object.values(sortObject(income_data)), // sort and grab values
    //                     backgroundColor: '#36A2EB'
    //                 }
    //             ]
    //         },
    //         options: {
                
    //         }
    //     });
    // },[income_data, expense_data, data_labels])
    return (
        <div className="bargraph">
            {/* <canvas id="my-chart" ref={myRef}/> */}
            <Bar data={bar_chart_data} height={500} options={{ maintainAspectRatio: false }}/>
        </div>
  );
}

export default BarGraph;