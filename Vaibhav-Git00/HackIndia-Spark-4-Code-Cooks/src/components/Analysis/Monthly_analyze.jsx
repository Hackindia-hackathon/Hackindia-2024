import React from 'react';
import { useState } from 'react';
import Chart from "react-apexcharts";


function Monthly_analyze() {

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const currMonth = new Date().getMonth();
    const monthsToShow = [];
    for (let i = 0; i < 7; i++) {
        const monthIndex = (currMonth - i + 12) % 12;
        monthsToShow.push(monthNames[monthIndex]);
    }

    let curr_expense = localStorage.getItem("total_expenses")
    let curr_budget = localStorage.getItem("total_budget")


    const [state, setState] = useState({
        options: {
            colors:['#0ea5e9','#22c55e'],
            chart: {
                id: "ExpenseEase_user_statement"
            },
            xaxis: {
                categories: [monthsToShow[6],
                monthsToShow[5],
                monthsToShow[4],
                monthsToShow[3],
                monthsToShow[2],
                monthsToShow[1],
                monthsToShow[0]]
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            grid: {
                show: false
            }
        },
        series: [
            {
                name: "Budget",
                data: [40000, 45000, 50000, 49000, 60000, 65000, curr_budget]
            }, {
                name: "Expense",
                data: [30000, 25000, 35000, 30000, 39000, 55000, curr_expense]
            },

        ]
    })

    return (
        <div>
            <Chart
                options={state.options}
                series={state.series}
                type="area"
                width="100%"

            />
        </div>
    )
}

export default Monthly_analyze
