"use strict";

const board = document.getElementById("board");
const colors = [
	"#E53D23",
	"#0033A0",
	"#A4BD31",
	"#FF5A1F",
	"#D62598",
	"#6B727A",
	"#667885",
	"#8B6F4E",
];

const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement("div");
	square.classList.add("square");

	square.addEventListener("mouseover", setColor);

	square.addEventListener("mouseleave", removeColor);

	board.append(square);
}

function setColor(event) {
	const element = event.target;
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
	const element = event.target;
	element.style.backgroundColor = "#1d1d1d";
	element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
