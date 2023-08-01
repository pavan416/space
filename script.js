function enterSite() {

    // Get the document's body
    var body = document.body;

    // Try to enter fullscreen mode
    if (body.requestFullscreen) {
        body.requestFullscreen();
    } else if (body.mozRequestFullScreen) { /* Firefox */
        body.mozRequestFullScreen();
    } else if (body.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        body.webkitRequestFullscreen();
    } else if (body.msRequestFullscreen) { /* IE/Edge */
        body.msRequestFullscreen();
    }
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'block';

    setTimeout(function() {
        document.getElementById('background-audio').play();
    }, 1000); // 1000 milliseconds = 1 second
}



var backgroundAudio = document.getElementById('background-audio');
var voiceMessage = document.getElementById('voice-message');
var enteringspace = document.getElementById('entering-space');

// Play the background audio after 1 second
setTimeout(function() {
    backgroundAudio.play();

    // Then play the voice message after 10 seconds of background audio
    setTimeout(function() {
        voiceMessage.play();

        setTimeout(function(){
            enteringspace.play();
        }, 10000);


    }, 10000); // 10000 milliseconds = 10 seconds
}, 1000); // 1000 milliseconds = 1 second





document.addEventListener('click', function (event) {
    if(backgroundAudio.paused) {
        backgroundAudio.play();
    }
}, false);


setTimeout(function() {
    document.getElementById('center-button').style.display = "block";
}, 20000); // 20000 milliseconds = 20 seconds


