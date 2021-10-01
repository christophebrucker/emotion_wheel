document.body.insertAdjacentHTML("afterbegin", "<h1>Hello Chris</h1>");
const wheel = document.createElement('img');
wheel.src = 'wheel.png';
document.body.appendChild(wheel);

wheel.addEventListener("mouseover", (event) => {
  document.body.style.cursor = "url(http://bringerp.free.fr/Files/RotMG/cursor.gif), pointer"
});
