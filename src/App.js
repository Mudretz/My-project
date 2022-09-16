import React, { useState } from "react";
import api from "./api";
import BlockProfit from "./blockProfit";

function App() {
    const [profits] = useState(api.profits.fetchAll());
    console.log(profits);
    return (
        <>
        <h2>Доходы</h2>
            <div className="plus"></div>
            <table cellSpacing="0">
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Сумма</th>
                        <th>Источник</th>
                    </tr>
                </thead>
            </table>
            <div className="scroll-table-body">
                <table cellspacing="0">
                    {profits.map( (profit) => (
                        <tbody>
                        <BlockProfit profit={profit}/>
                        </tbody>
                    ))}
                </table>
            </div>
        </>
    );
}

export default App;
