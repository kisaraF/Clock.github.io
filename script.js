let wakeup = 5;
let code = 7;
let lunch = 14;
let games = 16;

let img = document.getElementById('image');
let text = document.getElementById('textHere');

let display = document.querySelector('.displayHere');

function currentTimee(){
	var currentTime = new Date();

	let hours = currentTime.getHours();
	let mins = currentTime.getMinutes();
	let sec = currentTime.getSeconds();
	let meridian = 'AM'

	if(hours > 12){
		hours = hours - 12;
		meridian = 'PM'
	}

	if(hours < 10){
		hours = "0" + hours;
	}


	if(mins < 10){
		mins = "0" + mins;
	}

	if(sec < 10){
		sec = "0" + sec;
	}

	
	let time = hours + " : " + mins + " : " + sec + "    " + meridian;
	let displayTime = document.querySelector('.clock');
	displayTime.innerText = time;
}
 

 currentTimee();

 var oneSecond = 1000;
setInterval( currentTimee, oneSecond);

function add(){
	let btn = document.getElementById('reminder');
	btn.style.display = "none";
	let hidden = document.querySelector('.hidden');
	hidden.style.display = "block";
}

function set(){
	let text = document.getElementById('addReminder').value;
	let hr = Number(document.getElementById('addReminderHr').value);
	let min = Number(document.getElementById('addReminderMin').value);

	var timeNow = new Date();
	let hours = timeNow.getHours();
	let mins = timeNow.getMinutes();
	
	let string = "Wake up player !!! It's Time to " + text;
	display.append(string);
}

function update(){
	let quote;
	let images;
	let nowTime = new Date();
	let nowHr = nowTime.getHours();

	if(nowHr === wakeup){
		images = "https://www.telegraph.co.uk/content/dam/Gardening/26aug/Wakeupalarmclock-xlarge.jpg";
		quote = "What's Up Player It is time to WAKEUP !!!";
	}else if( nowHr === code){
		images = "https://c.wallhere.com/photos/f4/8c/macro_depth_of_field_programming_language_code_pixels_syntax_highlighting-1925227.jpg!d";
		quote = "What's Up Player It is time to CODE !!!";
	}else if(nowHr === lunch){
		imgaes =  "https://japaneselevelup.com/wp-content/uploads/2018/05/Why-Programmers-Like-Japanese-Why-Japanese-Learners-like-Programming-1-min.jpg";
		quote = "What's Up Player It is time to EAT !!!";
	}else if(nowHr === games){
		images = "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/09/GettyImages-1097026358_header-1024x575.jpg?w=1155&h=1528";
		quote = "What's Up Player It is time to GAMING !!!";
	}else{
		images = "https://kamaumwangi.co.ke/wp-content/uploads/2020/07/Covid-19-and-the-Problem-of-Freedom.jpg";
		quote = "It's FREE TIME!!!";
	}
	img.src = images;
	text.innerText = quote;
}

update();