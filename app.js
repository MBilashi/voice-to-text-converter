function start() {
    var btn = document.getElementById('btn');

    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // start recognition
    recognition.start();

    recognition.onstart = function() {
        btn.classList.add('fade');
    };

    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        document.getElementById('text').value = event.results[0][0].transcript;
    };

    recognition.onspeechend = function() {
        // when user is done speaking
        btn.classList.remove('fade');
        recognition.stop();
    }
}