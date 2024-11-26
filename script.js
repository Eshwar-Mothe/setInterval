//getting element

const animate = document.getElementById('dots')
const colors = ['red', 'yellow', 'blue', 'aqua']

let dotlength = 0
index = 0

setInterval(() => {
    animate.innerText = '.'.repeat(dotlength)
    dotlength = (dotlength + 1) % 5;

}, 1000)

setInterval(() => {
animate.style.color = colors[index]
index = (index + 1) % colors.length
},1000)