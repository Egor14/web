var btn = document.getElementById("btnRaise");
var btn2 = document.getElementById("btnYourRaise");

startTimer();
function startTimer(){
	var currentTimer = document.getElementById("time").innerHTML;
	var arr = currentTimer.split(':');
	var minutes = arr[0];
	var seconds = arr[1];
	if (minutes == 0 && seconds == 0){
		alert('Your time left');
		btnYourRaise.disabled = true;
		btnRaise.disabled = true;
		return;
	}
	else seconds -= 1;
	document.getElementById("time").innerHTML = formatTime(minutes) + ":" + formatTime(seconds)
	setTimeout(startTimer, 1000)
}

function formatTime(time){
	time = Number.parseInt(time);
	if (time < 10) return "0" + time
	else return time
}

function updateTime(){
	document.getElementById("time").innerHTML = baseTime;
}

