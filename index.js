var expense = document.getElementById('expense');
var amount = document.getElementById('amount');
var date = document.getElementById('date');

var expense_data = document.getElementById('expense-data');
var amount_data = document.getElementById('amount-data');
var date_data = document.getElementById('date-data');

function expenseLength() {
    return expense.value.length;
}

function amountLength() {
    return amount.value.length;
}

function dateLength() {
    return date.value.length;
}

