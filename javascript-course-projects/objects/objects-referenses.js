let myAccount = {
name: 'Sander Tonning',
    expenses: 0,
    income: 0
}

// addIncome: account + amount

// resetAccount: which account to change.

// getAccountSummary: print summary of the account. Account balance, expenses and income.
// example: Account for Sander has $900. $1000 in income. $100 in expenses.

//test:
// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccunt
// getAccountSummary

let addIncome = (account, amount) => {
    account.income = account.income + amount
}

let addExpense = (account, amount) => {
    account.expenses = account.expenses + amount
}

let resetAccount = (account) => {
    account.name = '';
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = (account) => {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}
//tests
addIncome(myAccount, 4000);
addExpense(myAccount, 200);
addExpense(myAccount, 1200);
console.log(getAccountSummary(myAccount));


// resetAccount(myAccount);
// console.log(getAccountSummary(myAccount));
