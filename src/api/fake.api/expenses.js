const expenses = [
    {id: 15464564587, date: "15.09.22", source: "Магазин", summary: "1200"},
    {id: 15464564580, date: "15.09.22", source: "Магазин", summary: "1200"},
    {id: 15464564588, date: "15.09.22", source: "Зарплата", summary: "1200"},
    {id: 15464564589, date: "15.09.22", source: "Магазин", summary: "1200"},
    {id: 15464564582, date: "15.09.22", source: "Зарплата", summary: "1200"},
    {id: 15464564581, date: "15.09.22", source: "Зарплата", summary: "1200"},
    {id: 15464564583, date: "15.09.22", source: "Зарплата", summary: "1200"}
]

export function fetchAll() {
    return expenses;
}