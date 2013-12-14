var Context = window.webkitAudioContext || window.AudioContext;
if (Context) module.exports = new Context;