"use strict";

const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);

function dragstart(event) {
	event.target.classList.add("hold");
	setTimeout(() => event.target.classList.add("hide"), 0);
}

item.addEventListener("dragend", dragend);

function dragend(event) {
	event.target.classList.remove("hold", "hide");
}

for (const placeholder of placeholders) {
	placeholder.addEventListener("dragenter", dragenter);
	placeholder.addEventListener("dragover", dragover);
	placeholder.addEventListener("dragleave", dragleave);
	placeholder.addEventListener("drop", dragdrop);
}

function dragenter(event) {
	event.target.classList.add("hovered");
}

function dragover(event) {
	event.preventDefault();
}

function dragleave(event) {
	event.target.classList.remove("hovered");
}

function dragdrop(event) {
	event.target.classList.remove("hovered");
	event.target.append(item);
}
