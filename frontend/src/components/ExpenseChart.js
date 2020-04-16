import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

function ExpenseChart(props) {
    // const myRef = useRef(null)


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
    // useEffect(() => {
    //     const myChartRef = myRef.current.getContext("2d");
        
    //     new Chart(myChartRef, {
    //         type: "doughnut",
    //         data: {
    //             //Bring in data
    //             labels: Object.keys(data),
    //             datasets: [{
    //                 data: Object.values(data),
    //                 backgroundColor: [
    //                     '#FF6384',
    //                     '#36A2EB',
    //                     '#27ae60',
    //                     '#FFCE56',
    //                     '#476172',
    //                     '#1abc9c',
    //                     '#9b59b6',
    //                     '#f1c40f',
    //                     '#e67e22',
    //                     '#34495e',
    //                     ],
    //                     hoverBackgroundColor: []
    //                 }
    //             ]
    //         },
    //         options: {
    //             //Customize chart options
    //         }
    //     }, [data]);
    // })
    return (
        <div>
            {/* <canvas id="my-chart" ref={myRef}/> */}
            <Doughnut data={chart_data}/>
        </div>
  );
}

export default ExpenseChart;