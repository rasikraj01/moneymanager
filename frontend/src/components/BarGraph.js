import React, {useEffect, useState, useRef} from 'react';
import Chart from 'chart.js';
import moment from 'moment';
import { Bar } from 'react-chartjs-2';


// aprrr yet to fix

function BarGraph(props) {
    
    //function to sort object by keys
    const sortObject = o => Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {})

    // expense data object init
    let expense_data = {}
    let dates = new Set() // months 

    for(let i = 0; i < props.expense.length; i++){
        let date = moment(props.expense[i].date).format('YYYY M') // 3
        dates.add(date)
        if(date in expense_data){
            expense_data[date] += props.expense[i].amount 
        }else{
            expense_data[date] = props.expense[i].amount // {3 : 100 + + + }
        }
    }

    // income data object init
    let income_data = {}
    for(let i = 0; i < props.income.length; i++){
        let date = moment(props.income[i].date).format('YYYY M')
        dates.add(date)
        if(date in income_data){
            income_data[date] += props.income[i].amount
        }else{
            income_data[date] = props.income[i].amount
        }
    }

    // data labels converted into array and sort them format 2020 12
    let data_labels_Arr = [...dates].sort().sort((a,b) => {
        let t = a.split(" ")[0] === b.split(" ")[0]
      if(t){
          return (parseInt(a.split(" ")[1] - b.split(" ")[1]))
      }else{
          return 0
      }
    })
    
    // set income 0 if only expense is added for that  month
    for(let i = 0 ; i < data_labels_Arr.length; i++){
        let month = moment(data_labels_Arr[i]).format('YYYY M')
        if (!(month in income_data)){
            income_data[month] = 0
        }
    }
    console.log(income_data);
    
    // set expense 0 if only income is added for that  month
    for(let i = 0 ; i < data_labels_Arr.length; i++){
        let month = moment(data_labels_Arr[i]).format('YYYY M')
        if (!(month in expense_data)){
            expense_data[month] = 0
        }
    }
    console.log(expense_data);

    
    let month_day={'1':'Jan', '2':'Feb','3':'Mar','4':'Apr','5':'May','6':'Jun','7':'Jul','8':'Aug','9':'Sept','10':'Oct','11':'Nov', '12':'Dec'}
    data_labels_Arr.forEach((label, index, arr) => {
       let t = label.split(" ")[1]
       
       let l2=label.split(" ").slice(0,-1)
       
       let m= month_day[t]
       arr[index] = m + " " + l2
        
    })
    
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
    return (
        <div className="bargraph">
            <Bar data={bar_chart_data} height={500} options={{ maintainAspectRatio: false }}/>
        </div>
  );
}

export default BarGraph;