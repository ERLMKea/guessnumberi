const out = (str) => { console.log(str) };

//if you have another AudioContext class use that one, as some browsers have a limit

const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioCtx = new AudioContext();

//let audioCtx = new AudioContext();
console.log(audioCtx);
