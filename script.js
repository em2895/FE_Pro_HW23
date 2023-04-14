//Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

const contentTable = document.getElementById('contentTable');
const table = document.createElement('table');
let counter = 1;

contentTable.appendChild(table);
table.setAttribute("style", "border: 2px red solid;" )

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for (let j = 0; j < 10; j++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        td.textContent += counter;
        counter++;
    }
}