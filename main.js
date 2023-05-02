import './style.css'

console.log('hello vite')

function meow(){
  console.log("meow");
}

const meowBtn = document.getElementById('cat-btn');

meowBtn.addEventListener('click', meow)