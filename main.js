var allAudios = document.querySelectorAll('audio');

function stopAllAudio(){
	allAudios.forEach(function(audio){
		audio.load();
	});
}

function play(element){
    stopAllAudio();
    var audio = document.getElementById(element);
    audio.play();
}