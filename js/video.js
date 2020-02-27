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

  	video.playbackRate -= 0.2;
  	console.log("Speed is "+ video.playbackRate);

} 

function increaseSpeed() {

	video.playbackRate += 0.25;
	console.log("Speed is "+ video.playbackRate);

} 

function skipAhead() {
	video.currentTime += 60
	console.log("Current location is "+ video.currentTime + " seconds");
} 

function mute() { 
  	
  		console.log("Unmuted");
  	
      	console.log("Muted");
}

function changeVolume() {
;	console.log("Volume is ");
}
       

function gray() { 

	console.log("In grayscale")
}

function color() {

	console.log("In color") 
}
