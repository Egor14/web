  var btn = document.getElementById("btnRaise");
  btn.onclick = function raise(){
    updateTime();
    updatePrice(5);
  }

   var btn2 = document.getElementById("btnYourRaise");
   btn2.onclick = function raise(){
   	if (Number(document.getElementById("inputPassword6").value) == 0) return;
    updateTime();
    updatePrice(Number(document.getElementById("inputPassword6").value));
  }

baseTime = "00:15";
basePrice = 50;
document.getElementById("time").innerHTML = baseTime;
document.getElementById("price").innerHTML = basePrice;
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

function updatePrice(dollars){
	basePrice += dollars;
	document.getElementById("price").innerHTML = basePrice;
}