"use strict";

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName("budget-value")[0],
	dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
	levelValue = document.getElementsByClassName("level-value")[0],
	expensesValue = document.getElementsByClassName("expenses-value")[0],
	optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
	incomeValue = document.getElementsByClassName("income-value")[0],
	monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
	yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0];

let expensesItem = document.getElementsByClassName("expenses-item");

let expensesBtn = document.getElementsByTagName("button")[0],
	optionalExpensesBtn = document.getElementsByTagName("button")[1],
	countBtn = document.getElementsByTagName("button")[2];

let optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");

let incomeItem = document.querySelector(".choose-income"),
	checkSavings = document.querySelector("#savings"),
	sumValue = document.querySelector(".choose-sum"),
	percentValue = document.querySelector(".choose-percent"),
	yearValue = document.querySelector(".year-value"),
	monthValue = document.querySelector(".month-value"),
	dayValue = document.querySelector(".day-value");

let money, time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

startBtn.addEventListener("click", function () {
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	let checkDateInput = /^\d{4}-\d{2}-\d{2}$/g; // для проверки ввода даты в формате YYYY-MM-DD
	while (!checkDateInput.test(time)) {
		alert('Введите дату в формате YYYY-MM-DD');
		time = prompt("Введите дату в формате YYYY-MM-DD", "");
		if (time == "" || time == null) { break; }
	}

	money = +prompt("Ваш бюджет на месяц?", "");
	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();

	expensesBtn.disabled = false;
	optionalExpensesBtn.disabled = false;
	countBtn.disabled = false;
});

expensesBtn.addEventListener("click", function () {
	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let expensesMonthly = expensesItem[i].value,
			howMuch = expensesItem[++i].value;

		if (
			typeof expensesMonthly === "string" &&
			expensesMonthly != null &&
			howMuch > 0 &&
			expensesMonthly != "" &&
			howMuch != "" &&
			expensesMonthly.length < 50
		) {
			appData.expenses[expensesMonthly] = howMuch;
			sum += +howMuch;
		} else {
			i--;
		}
		expensesValue.textContent = sum;
	}
});

optionalExpensesBtn.addEventListener("click", () => {
	/* for (let i = 0; i < optionalExpensesItem.length; i++) {
		let opt = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
	} */
	optionalExpensesItem.forEach(function (item, i) {
		let opt = item.value;

		appData.optionalExpenses[i] = opt;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
		item.value = "";
	});
});

countBtn.addEventListener("click", () => {
	if (appData.budget != undefined) {
		appData.budgetPerDay = +((appData.budget - +expensesValue.textContent) / 30).toFixed(2);
		dayBudgetValue.textContent = appData.budgetPerDay;

		if (appData.budgetPerDay < 100) {
			levelValue.textContent = "Минимальный уровень достатка";
		} else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
			levelValue.textContent = "Средний уровень достатка";
		} else if (appData.budgetPerDay > 2000) {
			levelValue.textContent = "Высокий уровень достатка";
		} else {
			levelValue.textContent = "Произошла ошибка";
		}
	} else {
		dayBudgetValue.textContent = `Нажмите кнопку "Начать расчет."`;
	}
});

incomeItem.addEventListener("input", () => {
	let items = incomeItem.value;

	if (isNaN(items) || items != "") {
		appData.income = items.split(",");
		incomeValue.textContent = appData.income;
	}
});

checkSavings.addEventListener("click", () => {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener("input", () => {
	if (appData.savings == true) {
		let sum = +sumValue.value;
		let percent = +percentValue.value;

		appData.monthIncome = (sum / 100 / 12) * percent;
		appData.yearIncome = (sum / 100) * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
	}
});

percentValue.addEventListener("input", () => {
	if (appData.savings == true) {
		let sum = +sumValue.value;
		let percent = +percentValue.value;

		appData.monthIncome = (sum / 100 / 12) * percent;
		appData.yearIncome = (sum / 100) * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
	}
});

const appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};
