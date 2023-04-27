hello = document.getElementById("hello");

const interval = setTimeout(switchHello, 2000);

function switchHello() {
  hello.src="./img/Text-final.gif"
};