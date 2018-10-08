  /*var btn = document.getElementById("btnRaise");
  btn.onclick = function raise(){
    updateTime();
    updatePrice(5);*/

    /*var xhr = new XMLHttpRequest();
    var body = document.getElementById("price").innerHTML;
    xhr.open("POST", '/1', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = ...;
    xhr.send(body);*/
    /*document.addEventListener("DOMContentLoaded", function(event) {

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/1", true);

		xhr.onload = function() {
			var req = document.getElementById("price").innerHTML;
			console.log('Egor');
		};

		xhr.onerror = function() {
			//alert.log("error")
		};

		xhr.send(req);
});*/
  //}

   /*var btn2 = document.getElementById("btnYourRaise");
   btn2.onclick = function raise(){
   	if (Number(document.getElementById("inputPassword6").value) == 0) return;
    updateTime();
    updatePrice(Number(document.getElementById("inputPassword6").value));
  }*/

//baseTime = "00:50";
//basePrice = Number(document.getElementById("price").innerHTML);
//document.getElementById("time").innerHTML = baseTime;
//document.getElementById("price").innerHTML = basePrice;

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

/*function updatePrice(dollars){
	basePrice += dollars;
	document.getElementById("price").innerHTML = basePrice;
}*/