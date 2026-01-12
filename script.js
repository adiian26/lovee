function launch() {
  const rocket = document.querySelector(".rocket");
  const opening = document.getElementById("opening");
  const content = document.getElementById("content");
  const music = document.getElementById("bg-music");

  rocket.classList.add("launch");

  setTimeout(() => {
    opening.style.display = "none";
    content.classList.remove("hidden");
    music.play();
  }, 2000);
}
