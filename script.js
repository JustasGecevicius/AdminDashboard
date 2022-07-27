let companyLogo = document.querySelector("img");
let divs = document.querySelectorAll(".noDisplay");
const delay = 0.7;

companyLogo.addEventListener("click", () => {
  companyLogo.style.transition = `${delay}s`;
  companyLogo.style.transform = "rotate(360deg)";
divs.forEach((elem) => elem.classList.toggle("noDisplay"));

  setTimeout(() => {
    companyLogo.style.transition = null;
    companyLogo.style.transform = null;
  }, delay * 1000);
});
