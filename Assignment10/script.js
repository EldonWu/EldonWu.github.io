function showSummary() {
    const qty = document.querySelector('input').value;
    const tol = qty * 75.95
    alert(String(qty) + ' orders have been received! The total price is $' + String(tol.toFixed(2)));
    document.querySelector('input').value = 0
}
function showSummaryB() {
    const qty = document.getElementById('hoodieb').value;
    const tol = qty * 75.95
    alert(String(qty) + ' orders have been received! The total price is $' + String(tol.toFixed(2)));
    document.getElementById('hoodieb').value = 0
}