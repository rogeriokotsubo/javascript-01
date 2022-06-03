// const btnHelloConsole = document.getElementById('btn-hello-console');
// btnHelloConsole.onclick = function() {
//   console.log('Olá Console!');
// }

document.getElementById('btn-hello-console').addEventListener('click', olaConsole);

function olaConsole() {
  console.log('Olá Console!');
}