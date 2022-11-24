import React, { useState } from "react";
import api from "./api";
import MainBlock from "./common/mainBlock";

function App() {
    const [profits] = useState(api.profits.fetchAll());
    const [expenses] = useState(api.expenses.fetchAll());
    const [accounts] = useState(api.accounts.fetchAll());
    console.log(accounts);
    return (
        <>
            <MainBlock
                data={profits}
                name="Доходы"
                columnName1="Дата"
                columnName2="Сумма"
                columnName3="Источник дохода"
                numberBlock="1"
            />
            <MainBlock
                data={expenses}
                name="Расходы"
                columnName1="Дата"
                columnName2="Сумма"
                columnName3="Название расхода"
                numberBlock="2"
            />
            <MainBlock
                data={accounts}
                name="Счета"
                columnName1="Название счета"
                columnName2="Баланс"
                numberBlock="3"
            />
        </>
    );
}

export default App;
