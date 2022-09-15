const pou = document.getElementById("pouSom");

document
  .getElementById("flutuador", "giraAstro", "astroBoy")
  .addEventListener("click", () => {
    pou.currentTime = 0;
    pou.play();
  });

var i = 0;

var tag = document.getElementById("exp");

var html = document.getElementById("exp").innerHTML;

var attr = tag.setAttribute("data", html);

var txt = tag.getAttribute("data");

var speed = 70;

function typeWriter() {
  if (i <= txt.length) {
    document.getElementById("exp").innerHTML = txt.slice(0, i + 1);

    i++;

    setTimeout(typeWriter, speed);
  }
}

typeWriter();
