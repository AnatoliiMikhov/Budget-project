'use strict';

let menu = document.getElementsByClassName('menu')[0], // получаем один элемент вместо псевдомассива
	menuItem = document.getElementsByClassName('menu-item'),
	title = document.getElementById('title'),
	adv = document.getElementsByClassName('adv')[0], // получаем один элемент вместо псевдомассива
	promptForApple = document.querySelector('#prompt'),
	menuItemLi5 = document.createElement('li'),
	menuItemLiDemo = document.createElement('li');

menu.insertBefore(menuItem[2], menuItem[1]); // меняем элементы местами

menuItemLi5.classList.add('menu-item'); // add new item li with class and text
menuItemLi5.textContent = "Пятый элемент";
menu.appendChild(menuItemLi5);

menuItemLiDemo.classList.add('menu-item'); // add class to element
menuItemLiDemo.textContent = "Demo element"; // set the content of the element
menu.insertBefore(menuItemLiDemo, menuItem[0]); // вставит элемент как первый элемент списка

document.body.style.backgroundImage = `url('img/apple_true.jpg')`; // смена фона

title.textContent = "Мы продаем только подлинную технику Apple"; // change text

adv.remove(); // Remove ads from page

let yourOpinion = prompt('Ваше отношение к технике Apple?', '');
promptForApple.textContent = yourOpinion;
