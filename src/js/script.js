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
	let expensesMonthly = prompt('Введите обязательную статью расходов в этом месяце', '');
	let howMuch = +prompt('Во сколько это обойдется?', '');
	// check for empty string and null and 0
	if ((typeof (expensesMonthly) === 'string') && (expensesMonthly != null) &&
		(howMuch > 0) && (expensesMonthly != '') && (howMuch != '') &&
		(expensesMonthly.length < 50)) {
		appData.expenses[expensesMonthly] = howMuch;

	} else {
		alert('Введите корректные данные');
		i--;
	}

}


// while cycle example
/* let i = 0;
while (i < 2) {
	let expensesMonthly = prompt('Введите обязательную статью расходов в этом месяце', '');
	let howMuch = +prompt('Во сколько это обойдется?', '');

	// check for empty string and null and 0
	if ((typeof (expensesMonthly) === 'string') && (expensesMonthly != null) &&
		(howMuch > 0) && (expensesMonthly != '') && (howMuch != '') &&
		(expensesMonthly.length < 50)) {
		appData.expenses[expensesMonthly] = howMuch;

	} else {
		alert('Введите корректные данные');
		i--;
	}
	i++;
} */


// do while cycle example
/* let i = 0;
do {
	let expensesMonthly = prompt('Введите обязательную статью расходов в этом месяце', ''),
		howMuch = +prompt('Во сколько это обойдется?', '');

	// check for empty string and null and 0
	if ((typeof (expensesMonthly) === 'string') && (expensesMonthly != null) &&
		(howMuch > 0) && (expensesMonthly != '') && (howMuch != '') &&
		(expensesMonthly.length < 50)) {
		appData.expenses[expensesMonthly] = howMuch;

	} else {
		alert('Введите корректные данные');
		i--;
	}
	i++;
} while (i < 2); */


// создаём свойство budgetPerDay объекта appData и присваиваем ему результат вычисления.
// create the budgetPerDay property of the appData object and assign the result of the calculation to it.
appData.budgetPerDay = (appData.budget / 30);

// выводим сумму расходов в день
// display the amount of expenses per day
alert('Ваши расходы составляют ' + appData.budgetPerDay + ' валюты в день.');

// проверка уровня достатка
// wealth check
if (appData.budgetPerDay < 100) {
	console.log('Минимальный уровень достатка');
} else if ((appData.budgetPerDay > 100) && (appData.budgetPerDay < 2000)) {
	console.log('Средний уровень достатка');
} else if (appData.budgetPerDay > 2000) {
	console.log('Высокий уровень достатка');
} else {
	console.log('Произошла ошибка');
}