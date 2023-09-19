"use strict";

const startBtn = document.getElementById("start");
const screens = document.querySelectorAll(".screen");
const timeList = document.getElementById("time-list");
const timeEl = document.getElementById("time");
const board = document.getElementById("board");
const colors = [
	"linear-gradient(45deg, #a1ffce, #f9ffd1)",
	"linear-gradient(45deg, #a8edea, #fed6e3)",
	"linear-gradient(45deg, #d299c2, #fef9d7)",
	"linear-gradient(45deg, #fff1eb, #ace0f9)",
	"linear-gradient(45deg, #30cfd0, #330867)",
	"linear-gradient(45deg, #f5f7fa, #c3cfe2)",
	"linear-gradient(45deg, #fddb92, #d1fdff)",
	"linear-gradient(45deg, #37ecba, #72afd3)",
	"linear-gradient(45deg, #9890e3, #b1f4cf)",
	"linear-gradient(45deg, #e6e9f0, #eef1f5)",
	"linear-gradient(45deg, #00c6fb, #005bea)",
	"linear-gradient(45deg, #6a85b6, #bac8e0)",
	"linear-gradient(45deg, #a7a6cb, #8989ba)",
	"linear-gradient(45deg, #8baaaa, #ae8b9c)",
	"linear-gradient(45deg, #13547a, #80d0c7)",
];

let time = 0;
let score = 0;

startBtn.addEventListener("click", event => {
	event.preventDefault();
	screens[0].classList.add("up");
});

timeList.addEventListener("click", event => {
	if (event.target.classList.contains("time-btn")) {
		time = parseInt(event.target.getAttribute("data-time"));
		screens[1].classList.add("up");
		startGame();
	}
});

board.addEventListener("click", event => {
	if (event.target.classList.contains("circle")) {
		score++;
		event.target.remove();
		createRandomCircle();
	}
});

function startGame() {
	setInterval(decreaseTime, 1000);
	createRandomCircle();
	setTime(time);
}

function decreaseTime() {
	if (time === 0) {
		finishGame();
	} else {
		let current = --time;
		if (current < 10) {
			current = `0${current}`;
		}
		setTime(current);
	}
}

function setTime(value) {
	timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
	timeEl.parentNode.classList.add("hide");
	board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
	const circle = document.createElement("div");
	const size = getRandomNumber(10, 60);
	const { width, height } = board.getBoundingClientRect();
	const x = getRandomNumber(0, width - size);
	const y = getRandomNumber(0, height - size);
	const color = getRandomColor();

	circle.classList.add("circle");
	circle.style.width = `${size}px`;
	circle.style.height = `${size}px`;
	circle.style.top = `${y}px`;
	circle.style.left = `${x}px`;
	circle.style.background = color;

	board.append(circle);
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

// Cheat code
function winTheGame() {
	function kill() {
		const circle = document.querySelector(".circle");
		if (circle) circle.click();
	}
	setInterval(kill);
}
