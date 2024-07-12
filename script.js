let balance = 0;
const correctPin = '1234';
const balanceElement = document.getElementById('balance');
const transactionHistoryElement = document.getElementById('transaction-history');
const contentElement = document.getElementById('content');

function verifyPin() {
    const pin = document.getElementById('pin').value;
    if (pin === correctPin) {
        contentElement.style.display = 'block';
        document.querySelector('.pin-verification').style.display = 'none';
    } else {
        alert('Incorrect PIN. Please try again.');
    }
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    balance += amount;
    updateBalance();
    addTransaction('Deposit', amount);
    clearInput();
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    if (amount > balance) {
        alert('Insufficient balance.');
        return;
    }
    balance -= amount;
    updateBalance();
    addTransaction('Withdraw', amount);
    clearInput();
}

function updateBalance() {
    balanceElement.textContent = balance.toFixed(2);
}

function addTransaction(type, amount) {
    const transactionItem = document.createElement('li');
    transactionItem.textContent = `${type}:  ₹${amount.toFixed(2)}`;
    transactionHistoryElement.appendChild(transactionItem);
}

function clearInput() {
    document.getElementById('amount').value = '';
}

// Initialize the balance display
updateBalance();
