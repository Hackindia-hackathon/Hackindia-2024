import React from 'react';
import { useState } from 'react';
import Chart from "react-apexcharts";

function TotalAnalyze() {
    let expense = parseFloat(localStorage.getItem("total_expenses"))
    let budget = parseFloat(localStorage.getItem("total_budget"))
    let investments = parseFloat(localStorage.getItem("total_investment"))
    let savings = (budget - expense) * 0.2;
    let Balance = budget - expense;

    let percent_expense = (expense / budget) * 100;
    let percent_saving = (savings / budget) * 100;
    let percent_invest = (investments / budget) * 100;
    let remaing_balance = (Balance/ budget) * 100;

    const [state, setState] = useState({
        options: {
            labels: ["Expense", "Savings", "Investments", "Balance"],
            plotOptions: {
                pie: {
                    donut: {
                        size: 50 // Adjust the size of the donut
                    }
                }
            },
        },
        series: [percent_expense, percent_saving, percent_invest, remaing_balance]
    })

    return (
        <div>
            <Chart
                options={state.options}
                series={state.series}
                type="donut"
                width="330"
                height=""

            />
        </div>
    )
}

export default TotalAnalyze
