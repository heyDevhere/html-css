document.addEventListener("DOMContentLoaded", function() {
    // Create an AudioContext
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Fetch the audio file and decode it
    fetch('sound.mp3')
        .then(response => response.arrayBuffer())
        .then(buffer => audioContext.decodeAudioData(buffer))
        .then(decodedData => {
            // Create a buffer source and set its buffer
            var audioSource = audioContext.createBufferSource();
            audioSource.buffer = decodedData;
            audioSource.loop = true;

            // Connect the buffer source to the audio context's destination
            audioSource.connect(audioContext.destination);

            // Event listener for user interaction (click)
            document.addEventListener("click", function() {
                // Start the audio playback
                audioSource.start();
                console.log("Audio playback started successfully.");
            });
        })
        .catch(function(error) {
            console.error("Error loading or decoding audio:", error);
        });
});
