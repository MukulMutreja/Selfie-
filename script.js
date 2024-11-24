document.getElementById('revealButton').addEventListener('click', function() {
    var answer = document.getElementById('answer');
    var videoElement = document.getElementById('videoElement');
    
    // Remove hidden class to show the answer
    answer.classList.remove('hidden');
    
    // Change button text and disable it
    this.disabled = true;
    this.textContent = "You Are Awesome!";
    
    // Access the front camera and display it
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
            .then(function(stream) {
                videoElement.srcObject = stream;
                videoElement.classList.remove('hidden'); // Show the video feed
            })
            .catch(function(error) {
                console.log("Error accessing camera: " + error);
            });
    } else {
        console.log("Camera not supported on this device.");
    }
});
