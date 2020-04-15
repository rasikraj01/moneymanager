import React, {useEffect, useState, useRef} from 'react';
import Chart from 'chart.js';

function LineGraph() {
    const myRef = useRef(null)
    useEffect(() => {
        const myChartRef = myRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "expense",
                        data: [86, 67, 91],
                        backgroundColor: [
                            '#FF638445'
                            ],
                    },
                    {
                        label: "income",
                        data: [50, 80, 51],
                        backgroundColor:[
                            '#36A2EB43'
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

export default LineGraph;