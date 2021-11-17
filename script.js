const Toggler = document.querySelector(".toggler");
const Monthly = document.querySelectorAll(".monthly");
const Annual = document.querySelectorAll(".annual");

Toggler.addEventListener("click", () => {
  console.log("clicked");
  Monthly.forEach((monthly) => {
    monthly.style.display = monthly.style.display == "block" ? "none" : "block";
  });
  Annual.forEach((annual) => {
    annual.style.display = annual.style.display == "none" ? "block" : "none";
  });
});
