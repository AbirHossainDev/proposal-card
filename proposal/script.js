const envelope =
  document.getElementById("envelope");

const yesBtn =
  document.getElementById("yesBtn");

const noBtn =
  document.getElementById("noBtn");

const success =
  document.getElementById("success");

const againBtn =
  document.getElementById("againBtn");

const screen =
  document.getElementById("screen");


/* Envelope open */

envelope.addEventListener("click", function (event) {

  if (event.target.tagName === "BUTTON") {
    return;
  }

  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {
    createHearts(15);
  }

});


/* YES button */

yesBtn.addEventListener("click", function (event) {

  event.stopPropagation();

  success.classList.add("show");

  createHearts(35);

});


/* NO button */

noBtn.addEventListener("click", function (event) {

  event.stopPropagation();

  noBtn.textContent = "Try YES 😄";

  const x =
    Math.random() * 100 - 50;

  const y =
    Math.random() * 60 - 30;

  noBtn.style.transform =
    translate(`${x}px, ${y}px`);

});


/* Again button */

againBtn.addEventListener("click", function () {

  success.classList.remove("show");

  envelope.classList.remove("open");

  noBtn.textContent = "NO 🙈";

  noBtn.style.transform = "none";

});


/* Floating hearts */

function createHearts(amount) {

  for (let i = 0; i < amount; i++) {

    setTimeout(function () {

      const heart =
        document.createElement("div");

      heart.className =
        "float-heart";

      const hearts = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💓"
      ];

      heart.textContent =
        hearts[
          Math.floor(
            Math.random() * hearts.length
          )
        ];

      heart.style.left =
        (5 + Math.random() * 90) + "%";

      heart.style.animationDuration =
        (3 + Math.random() * 2) + "s";

      screen.appendChild(heart);

      setTimeout(function () {
        heart.remove();
      }, 5000);

    }, i * 100);

  }

}