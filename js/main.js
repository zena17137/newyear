const year = document.getElementById('year');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

setInterval(() => {
	const currentYear = new Date().getFullYear();
	const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

	year.innerText = currentYear + 1;

	const currentTime = new Date();

	const diff = nextYear - currentTime;

	let daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
	let hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
	let minutesLeft = Math.floor(diff / 1000 / 60) % 60;
	let secondsLeft = Math.floor(diff / 1000) % 60;

	days.innerText = daysLeft;
	hours.innerText = hoursLeft;
	minutes.innerText = minutesLeft;
	seconds.innerText = secondsLeft;
}, 100)