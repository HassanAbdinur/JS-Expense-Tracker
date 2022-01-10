let expense = document.getElementById('expense');
let amount = document.getElementById('amount');
let date = document.getElementById('date');

let expense_data = document.getElementById('expense-data');
let amount_data = document.getElementById('amount-data');
let date_data = document.getElementById('date-data');

const expenseLength = () => expense.value.length

const amountLength = () =>  amount.value.length

const dateLength = () => date.value.length

const createData = () => {
    expense_data.innerHTML = expense.value;
    amount_data.innerHTML = amount.value;
    date_data.innerHTML = date.value;
}

let submit = document.getElementById('submit').addEventListener('click', function () {
    if (expenseLength() && amountLength() && dateLength() > 0) {
        createData();
    }
}, true);