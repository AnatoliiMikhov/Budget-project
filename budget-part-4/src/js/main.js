"use strict";

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName("budget-value")[0],
	dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
	levelValue = document.getElementsByClassName("level-value")[0],
	expensesValue = document.getElementsByClassName("expenses-value")[0],
	optionalExpensesValue = document.getElementsByClassName(
		"optionalexpenses-value"
	)[0],
	incomeValue = document.getElementsByClassName("income-value")[0],
	mouthSavingsValue = document.getElementsByClassName(
		"mouthsavings-value"
	)[0],
	yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0];

let expensesItem = document.getElementsByClassName("expenses-item");

let expensesBtn = document.getElementsByTagName("button")[0],
	optionalExpensesBtn = document.getElementsByTagName("button")[1],
	countBtn = document.getElementsByTagName("button")[2];

let optionalExpensesItem = document.querySelectorAll("optionalexpenses-item");

let incomeItem = document.querySelector(".choose-income"),
	checkSavings = document.querySelector("#savings"),
	sumValue = document.querySelector(".choose-sum"),
	percentValue = document.querySelector(".choose-percent"),
	yearValue = document.querySelector(".year-value"),
	monthValue = document.querySelector(".month-value"),
	dayValue = document.querySelector(".day-value");

// object appData

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
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
	chooseExpenses: function() {
		for (let i = 0; i < 1; i++) {
			let expensesMonthly = prompt(
				"Введите обязательную статью расходов в этом месяце",
				""
			);
			let howMuch = +prompt("Во сколько это обойдется?", "");
			// check for empty string and null and 0
			if (
				typeof expensesMonthly === "string" &&
				expensesMonthly != null &&
				howMuch > 0 &&
				expensesMonthly != "" &&
				howMuch != "" &&
				expensesMonthly.length < 50
			) {
				appData.expenses[expensesMonthly] = howMuch;
			} else {
				alert("Введите корректные данные");
				i--;
			}
		}
	},
	detectDayBudget: function() {
		appData.budgetPerDay = +(appData.budget / 30).toFixed(2); // toFixed : string

		alert(
			"Ваши расходы составляют " +
				appData.budgetPerDay +
				" валюты в день."
		);
	},
	detectLevel: function() {
		if (appData.budgetPerDay < 100) {
			console.log("Минимальный уровень достатка");
		} else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.budgetPerDay > 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Произошла ошибка");
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?", ""),
				percent = +prompt("Под какой процент?", "");

			appData.monthIncome = (save / 100 / 12) * percent;
			alert(
				"Доход с Вашего депозита в месяц: " +
					appData.monthIncome.toFixed(2)
			);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 1; i <= 3; i++) {
			let answer = prompt("Статья необязательных расходов?");
			appData.optionalExpenses[i] = answer;
		}
		console.log(appData.optionalExpenses);
	},
	chooseIncome: function() {
		let items = prompt(
			"Ваши источники дополнительного дохода? (Перечислите через запятую)",
			""
		);

		if (typeof items != "string" || items == "" || typeof items == null) {
			console.log("Вы ввели некорректные данные или не ввели их вовсе");
		} else {
			appData.income = items.split(", ");
			appData.income.push(prompt("Может что-то ещё?", ""));
			appData.income.sort();
		}

		appData.income.forEach(function(itemArr, i) {
			alert(`Ваш доп. заработок состоит из:\n ${i + 1}: ${itemArr}`);
		});
	}
};

for (let key in appData) {
	console.log(
		`Наша программа включает в себя данные:\n ${key}: ${appData[key]}`
	);
}
