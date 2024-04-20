// Function to speak the provided text
function speakText() {
    const textInput = document.getElementById('textInput').value;
    const utterance = new SpeechSynthesisUtterance(textInput);
    window.speechSynthesis.speak(utterance);
}

// Event listener for the speak button
document.getElementById('speakButton').addEventListener('click', speakText);