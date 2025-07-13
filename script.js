const toggleBtn = document.getElementById("toggleBtn");
const extraInfo = document.getElementById("extraInfo");

toggleBtn.addEventListener("click", () => {
  if (extraInfo.style.display === "block") {
    extraInfo.style.display = "none";
    toggleBtn.textContent = "Show More";
  } else {
    extraInfo.style.display = "block";
    toggleBtn.textContent = "Show Less";
  }
});
