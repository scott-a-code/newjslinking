let modeBtn = document.getElementById('switch-mode');

modeBtn.addEventListener('click', () => {
    modeBtn.style.backgroundColor = "blue"
})

modeBtn.addEventListener('mouseleave', () => {
    modeBtn.style.backgroundColor = "white"
})

let greeting = document.getElementById('greet');

greeting.addEventListener('mouseenter', () => {
    greeting.textContent = "Welcome!"
})

greeting.addEventListener('mouseleave', () => {
    greeting.textContent = "This is H2";
})

let newp = document.getElementById('para4');

newp.addEventListener('keypress', () => {
    newp.textContent = "Welcome!"
})

