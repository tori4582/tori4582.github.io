window.onload = () => {
	const daysBoard = document.getElementById('days-board');
	const today = new Date(Date.now());
	const firstDayOfCurrentYear = new Date(today.getFullYear(), 0, 1);
	const lastDayOfCurrentYear = new Date(today.getFullYear(), 11, 31);
	const msInADay = 86400000;
	const markedClasses = "bg-slate-500 text-white";
	const todayClasses = "bg-slate-900 text-white flex justify-center items-center align-center";

	for (let i = 0; i < 366; i++) {
		const currentDate = new Date(firstDayOfCurrentYear.getTime() + (msInADay * i));
		const isBefore = currentDate.getTime() < today.getTime();
		const isToday = currentDate.getDate() === today.getDate() && currentDate.getMonth() === today.getMonth();

		let displayClass = (isToday)
			? todayClasses
			: (isBefore) ? markedClasses : "border";
		let displayHtml = (isToday)
			// ? `<span class="loading loading-spinner text-white text-xs"></span>`
			? `<div uk-spinner="ratio: 0.7"></div>`
			: `${currentDate.getDate()}.${currentDate.getMonth() + 1}`

		daysBoard.innerHTML += `<div class="rounded p-1 text-center align-bottom text-xs ${displayClass}">${displayHtml}</div>`;
	}

	console.log(today);
	console.log(firstDayOfCurrentYear);
	console.log(lastDayOfCurrentYear);

	const dayPercentage = ((today - firstDayOfCurrentYear) * 100 / (lastDayOfCurrentYear - firstDayOfCurrentYear)).toFixed(2);
	console.log(dayPercentage)

	document.querySelector('#progress-val').innerText = dayPercentage;
	document.querySelector("#progress-bar").setAttribute("value", dayPercentage);
}