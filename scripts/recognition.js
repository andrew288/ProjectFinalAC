const btnStartRecord = document.getElementById('btnStartRecord');
const btnStopRecord = document.getElementById('btnStopRecord');
const texto = document.getElementById('texto');
let recognition = new webkitSpeechRecognition();
recognition.lang = "es-PE";
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (event) => {
    const results = event.results;
    const palabra = results[results.length -1][0].transcript;
    texto.value += palabra;
}
recognition.onend = (event) => {
    console.log('El microfono dejo de escuchar');
}
recognition.onerror = (event) =>{
    console.log(event.error);   
}
btnStartRecord.addEventListener('click', () =>{
    texto.value="";
    recognition.start();
})
btnStopRecord.addEventListener('click', () => {
    recognition.abort();
})