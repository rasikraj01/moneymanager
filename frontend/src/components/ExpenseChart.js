import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js';

function ExpenseChart(props) {
    const myRef = useRef(null)


    let data = {}
    // console.log(props.expense)
    // console.log(data)    
    for(let i = 0; i < props.expense.length; i++){
        let category = props.expense[i].category
        if(category in data){
            data[category] += props.expense[i].amount 
        }else{
            data[category] = props.expense[i].amount
        }
    }

    useEffect(() => {
        const myChartRef = myRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "doughnut",
            data: {
                //Bring in data
                labels: Object.keys(data),
                datasets: [{
                    data: Object.values(data),
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
        }, [data]);
    })
    return (
        <div>
            <canvas id="my-chart" ref={myRef}/>
        </div>
  );
}

export default ExpenseChart;