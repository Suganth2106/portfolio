const card = document.querySelector(".hero-card");
const image = card.querySelector("img");

card.addEventListener("mousemove", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;

  const centerX = card.offsetWidth / 2;
  const centerY = card.offsetHeight / 2;

  const rotateX = (y - centerY) / 20;
  const rotateY = (centerX - x) / 20;

  image.style.transform =
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

card.addEventListener("mouseleave", () => {
  image.style.transform = "rotateX(0) rotateY(0) scale(1)";
});
