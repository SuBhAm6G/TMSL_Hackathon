// Get elements from the DOM
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const initialAmountInput = document.getElementById('intialAmount');
const setInitialBtn = document.getElementById('set-initial');
const resetBtn = document.getElementById('reset-btn');

// Initialize values
let transactions = [];
let initialAmount = 0;

// Update the balance, income, and expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);
  
  const total = amounts.reduce((acc, item) => acc - item, initialAmount).toFixed(2); // Deduct all amounts from initialAmount
  const expense = amounts
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  balance.innerText = `₹${total}`;
  money_plus.innerText = `+₹${initialAmount}`; // Initial amount is set once
  money_minus.innerText = `-₹${expense}`; // Expenses accumulate
}

// Add transaction to the DOM list
function addTransactionDOM(transaction) {
  const item = document.createElement('li');

  // Since all transactions are expenses now, apply minus styling
  item.classList.add('minus');
  item.innerHTML = `
    ${transaction.text} <span>-₹${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

  list.appendChild(item);
}

// Remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);
  updateLocalStorage();
  init();
}

// Initialize the app
function init() {
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM);
  updateValues();
}

// Generate a unique ID for each transaction
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// Add new transaction (treated as expense by default)
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please enter both text and amount');
    return;
  }

  const transaction = {
    id: generateID(),
    text: text.value,
    amount: Math.abs(+amount.value) // Automatically treat the value as a positive expense
  };

  transactions.push(transaction);
  addTransactionDOM(transaction);
  updateValues();
  updateLocalStorage();

  // Clear input fields
  text.value = '';
  amount.value = '';
}

// Set the initial amount
function setInitialAmount() {
  if (initialAmountInput.value.trim() === '') {
    alert('Please enter an initial amount');
    return;
  }

  initialAmount = +initialAmountInput.value;
  updateValues();
  updateLocalStorage();

  // Clear input field
  initialAmountInput.value = '';
}

// Reset the entire app
function resetApp() {
  transactions = [];
  initialAmount = 0;
  updateLocalStorage();
  init();
}

// Update local storage
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
  localStorage.setItem('initialAmount', initialAmount.toString());
}

// Load from local storage
function loadFromLocalStorage() {
  const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
  const localStorageInitialAmount = localStorage.getItem('initialAmount');

  if (localStorageTransactions) {
    transactions = localStorageTransactions;
  }

  if (localStorageInitialAmount) {
    initialAmount = +localStorageInitialAmount;
  }
}

// Event listeners
form.addEventListener('submit', addTransaction);
setInitialBtn.addEventListener('click', setInitialAmount);
resetBtn.addEventListener('click', resetApp);

// Load transactions and initial amount from local storage on startup
loadFromLocalStorage();
init();
