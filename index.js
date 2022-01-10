var expense = document.getElementById('expense');
var amount = document.getElementById('amount');
var date = document.getElementById('date');

var expense_data = document.getElementById('expense-data');
var amount_data = document.getElementById('amount-data');
var date_data = document.getElementById('date-data');

const expenseLength = () => {
    return expense.value.length;
}

const amountLength = () => {
    return amount.value.length;
}

function dateLength() {
    return date.value.length;
}

function createData() {
    expense_data.innerHTML = expense.value;
    amount_data.innerHTML = amount.value;
    date_data.innerHTML = date.value;
}

var submit = document.getElementById('submit').addEventListener('click', function () {
    if (expenseLength() && amountLength() && dateLength() > 0) {
        createData();
    }
}, true);