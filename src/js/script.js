'use strict';
let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

for (let i = 0; i < 2; i++) {
	var expensesMonthly = prompt('Введите обязательную статью расходов в этом месяце', '');
	var howMuch = +prompt('Во сколько это обойдется?', '');
}

appData.expenses.expensesMonthly = howMuch;

let monthlyBudget = (money / 30);

alert('Ваши расходы составляют ' + monthlyBudget + ' валюты в день.');
