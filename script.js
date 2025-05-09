const shareBtn = document.querySelector(".author--icon");
const shareBtnStyle = document.querySelector(".author--share-icon");
const displayIcon = document.querySelector(".card__main--share-inf");

let check = true;

shareBtn.addEventListener("click", () => {
  displayIcon.classList.toggle("hidden");

  if (check) {
    shareBtnStyle.style.fill = "var(--Light-Grayish-Blue)";
    shareBtn.style.backgroundColor = "var(--Desaturated-Dark-Blue)";
  } else {
    shareBtnStyle.style.fill = "var(--Desaturated-Dark-Blue)";
    shareBtn.style.backgroundColor = "var(--Light-Grayish-Blue)";
  }

  check = !check;
});
