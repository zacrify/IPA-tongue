var allAudios = document.querySelectorAll('audio');
// let voice = document.getElementsByClassName('voice');
// let voiceless = document.getElementsByClassName('voiceless');
let voice = document.getElementById('voice-sound');
// voice1.innerHTML = '<h1>Voice</h1>';

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

function stopAllAudio(){
	allAudios.forEach(function(audio){
		audio.load();
	});
}
let zcounter = 1;
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
    console.log(newArray[0]);
    var selectButton = document.getElementById(newArray[0]);
    selectButton.style.zIndex = ++zcounter;
    // setTimeout(selectButton.style.zIndex = 0, 2000);
}
