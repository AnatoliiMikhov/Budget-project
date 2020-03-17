'use strict';

let money,
	time;

function start() {
	money = +prompt('Ваш бюджет на месяц?', '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');
	}

}
start();


let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
};

function chooseExpenses() {
	for (let i = 0; i < 1; i++) {
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
}
chooseExpenses();

// расчёт дневного бюджета.
function detectDayBudget() {
	// создаём свойство budgetPerDay объекта appData и присваиваем ему результат вычисления.
	// create the budgetPerDay property of the appData object and assign the result of the calculation to it.
	appData.budgetPerDay = +(appData.budget / 30).toFixed(2); // toFixed : string

	// выводим сумму расходов в день
	// display the amount of expenses per day
	alert('Ваши расходы составляют ' + appData.budgetPerDay + ' валюты в день.');
}
detectDayBudget();

// проверка уровня достатка
// wealth check
function detectLevel() {
	if (appData.budgetPerDay < 100) {
		console.log('Минимальный уровень достатка');
	} else if ((appData.budgetPerDay > 100) && (appData.budgetPerDay < 2000)) {
		console.log('Средний уровень достатка');
	} else if (appData.budgetPerDay > 2000) {
		console.log('Высокий уровень достатка');
	} else {
		console.log('Произошла ошибка');
	}
}
detectLevel();

// расчёт накоплений с депозита.
function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt('Какова сумма накоплений?', ''),
			percent = +prompt('Под какой процент?', '');

		appData.monthIncome = save / 100 / 12 * percent;
		alert("Доход с Вашего депозита в месяц: " + appData.monthIncome.toFixed(2));
	}
}
checkSavings();

// расчёт необязательных расходов.
function chooseOptExpenses() {
	for (let i = 1; i <= 3; i++) {
		let answer = prompt('Статья необязательных расходов?');
		appData.optionalExpenses[i] = answer;
	}
}
// chooseOptExpenses();