import React from 'react';

const Analytics = ({ profits, expenses }) => {
    let sumSalary = 0;
    let sumPension = 0;
    let sumCashBack = 0;
    let sumOtherProfits = 0;
    const filterSalary = profits.map( item => {
        if (item.source === "Зарплата") {
            return sumSalary += item.summary
        }
        if (item.source === "Пенсия") {
            return sumPension += item.summary
        }
        if (item.source === "Кэшбэк") {
            return sumCashBack += item.summary
        }
        if (item.source === "Прочие доходы") {
            return sumOtherProfits += item.summary
        }
        });
    const sumMoney = [sumSalary, sumPension, sumCashBack, sumOtherProfits];
    return (
        <div className="analytics">
            <div className="analytics__item"></div>
        </div>
    );
}
 
export default Analytics;