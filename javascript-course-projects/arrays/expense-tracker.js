const account = {
    name: 'Sander Tonning',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        });
    },

    getAccountSummary: function () {
        let allExpenses = 0;
            allIncome = 0;
            accountBalance = 0;
        
    this.expenses.forEach(function (expense) {
        allExpenses = allExpenses + expense.amount;
    
    });

    this.income.forEach(function (sum) {
        allIncome = allIncome + sum.amount
    })

        accountBalance = allIncome - allExpenses;

        return `${this.name} has a balance of $${accountBalance}. $${allIncome} in income. $${allExpenses} in expenses`;
    }

    
}

account.addExpense('Rent', 950)
account.addExpense('Coffe', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())