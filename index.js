document.getElementById('submit').onclick = function () {
    document.getElementById('table').style.display = "block";

    var table = document.getElementById('table');
    var row = table.insertRow(-1);
    var expense = row.insertCell(0);
    var amount = row.insertCell(1);
    var date = row.insertCell(2);

    expense.innerHTML = document.getElementById('expense');
    amount.innerHTML = document.getElementById('amount');
    date.innerHTML = document.getElementById('date');

    return false;
}
