import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

function ExpenseChart(props) {

    // data objecct init 
    let data = {}
    for(let i = 0; i < props.expense.length; i++){
        let category = props.expense[i].category
        if(category in data){
            data[category] += props.expense[i].amount 
        }else{
            data[category] = props.expense[i].amount
        }
    }
    let chart_data = {
        //Bring in data
        labels: Object.keys(data),
        datasets: [{
            data: Object.values(data),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#27ae60',
                '#FFCE56',
                '#476172',
                '#1abc9c',
                '#9b59b6',
                '#f1c40f',
                '#e67e22',
                '#34495e',
                ],
                hoverBackgroundColor: []
            }
        ]
    }
    return (
        <div className="doughnut">
            <Doughnut data={chart_data} height={500} options={{ maintainAspectRatio: false }}/>
        </div>
  );
}

export default ExpenseChart;