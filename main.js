let a = document.getElementById("btnplus");
let b = document.getElementById("btnminus");
let num = document.getElementById("number");
let d = document.getElementById("wrap");
let counter = 0;

a.style.backgroundColor = "green"
a.style.border = "none"
a.style.width = "40px"
a.style.height = "40px"
a.style.fontSize = "20px"

b.style.backgroundColor = "red"
b.style.border = "none"
b.style.width = "40px"
b.style.height = "40px"
b.style.fontSize = "20px"

num.style.fontSize = "20px"
num.style.marginTop = "10px"

d.style.display = "flex"
d.style.justifyContent = "center"
d.style.gap = "10px"
d.style.marginTop = "350px"



a.addEventListener("click", function name() {
    counter++;
    num.innerHTML = counter;
})

b.addEventListener("click", function min() {
    counter--;
    num.innerHTML = counter;
})