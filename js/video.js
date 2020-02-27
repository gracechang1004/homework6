var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 

	console.log("Play Video");
	video.play();
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
	document.getElementById("volumeSlider").innerHTML = this.value + "%";
	console.log("Volume is " this.value);
	video.volume=this.value/100
}
       

function gray() { 

	video.style.filter = "grayscale(100%)";;
	console.log("In grayscale")
}

function color() {

	video.style.filter = "grayscale(0%)";;
	console.log("In color") 
}
