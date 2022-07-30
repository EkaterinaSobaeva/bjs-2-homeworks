class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, callback, id) {

		if (id == undefined) {
			throw new Error('Индентификатор звонка не передан');
		}
		
		if (this.alarmCollection.some(item => item.id === id)) {
			console.error('Звонок с таким идентификатором существует');
		} else {
			let alarm = {};
			alarm.id = id;
			alarm.time = time;
			alarm.callback = callback;

			this.alarmCollection.push(alarm);
		}

		
	}

	removeClock(id) {
		let alarmLength = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
		if (this.alarmCollection.length < alarmLength) {
			return true
		} else {
			return false
		}
	}

	getCurrentFormattedTime() {
		let date = new Date();
		let hour = date.getHours();
		let minute = date.getMinutes();
		return `${hour}:${minute}`
	}

	start() {
		let time = this.getCurrentFormattedTime();

		function checkClock(alarm) {
			if (alarm.time === time) {
				alarm.callback;
			}
		}

		this.timerId = setInterval(this.alarmCollection.forEach((item) => checkClock(item)), 10);
	}

	stop() {
		if (this.timerId !== undefined) {
			clearInterval(this.timerId);
			this.timerId = null;
		}

	}

	printAlarms() {
		this.alarmCollection.forEach( item => console.log(`Будильник №${item.id} заведён на ${item.time}`));
	}

	clearAlarms() {
		clearTimeout(this.timerId);
		this.alarmCollection = this.alarmCollection.filter(item => item == undefined);
	}
}

let newAlarm = new AlarmClock();
newAlarm.addClock("09:00", () => console.log("Пора вставать!"), 1);
newAlarm.addClock("09:01", () => { console.log("Вставая!"); newAlarm.removeClock(2)}, 2);
newAlarm.addClock("09:02", () => { console.log("Вставая, соня!"); newAlarm.clearAlarms(); newAlarm.printAlarms()}, 3);
newAlarm.addClock("09:05", () => console.log("Вставай, а то проспишь!"), 1);
console.log(newAlarm.printAlarms());
console.log(newAlarm.start());