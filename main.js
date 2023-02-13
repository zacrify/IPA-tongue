var allAudios = document.querySelectorAll('audio');
// let voice = document.getElementsByClassName('voice');
// let voiceless = document.getElementsByClassName('voiceless');
let voice = document.getElementById('voice-sound');
// voice1.innerHTML = '<h1>Voice</h1>';

function stopAllAudio(){
	allAudios.forEach(function(audio){
		audio.load();
	});
}

function play(element){
    stopAllAudio();
    var audio = document.getElementById(element);
    audio.play();
    let newArray = element.split('-');
    let byValue = document.querySelectorAll(`[value="${newArray[0]}"]`);
    if(byValue[0].classList.contains('voice')) {
        voice.innerHTML = '<h1>Voice</h1>'
    } else {
        voice.innerHTML = '<h1>VoiceLESS</h1>'
    }
}
