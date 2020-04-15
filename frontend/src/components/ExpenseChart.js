import React, {useEffect, useState, useRef} from 'react';
import Chart from 'chart.js';

function ExpenseChart() {
    const myRef = useRef(null)
    useEffect(() => {
        const myChartRef = myRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "doughnut",
            data: {
                //Bring in data
                labels: [
                    'Red',
                    'Yellow',
                    'Blue'
                ],
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                        ],
                        hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                        ]
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    },[])
    return (
        <div>
            <canvas id="my-chart" ref={myRef}/>
        </div>
  );
}

export default ExpenseChart;