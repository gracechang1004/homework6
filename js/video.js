var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 

	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = (100 + "%")
} 

function pauseVid() { 

	console.log("Pause Video");
	video.pause();
} 

function decreaseSpeed() { 

	video.playbackRate = video.playbackRate*0.8;
  	console.log("Speed is "+ video.playbackRate);

} 

function increaseSpeed() {

	video.playbackRate = video.playbackRate*1.25;
	console.log("Speed is "+ video.playbackRate);

} 

function skipAhead() {
	video.currentTime += 60
	if (video.currentTime == video.duration) {
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	console.log("Current location is "+ video.currentTime + " seconds");

} 

function mute() { 

	if (video.muted == false) {
		video.muted = true;
		console.log("Muted");
		document.getElementById("mute").innerHTML = "Unmute";

	}
	
	else {
		video.muted = false;
		console.log("Unmuted");
		document.getElementById("mute").innerHTML = "Mute";
	}

}

function changeVolume() {
    video.volume = document.getElementById("volumeSlider").value/100;
    document.querySelector("#volume").innerHTML = (video.volume*100 + "%")


}
       

function gray() { 

	video.style.filter = "grayscale(100%)";
	console.log("In grayscale");
}

function color() {

	video.style.filter = "grayscale(0%)";
	console.log("In color");
}


document.getElementById("p2").style.color = "blue";
