let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}



// Day | light toggle

const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");

themeToggleBtn.addEventListener("click", (e) => {
  e.preventDefault();

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeIcon.classList.remove("bx-moon");
    themeIcon.classList.add("bx-sun");
  } else {
    themeIcon.classList.remove("bx-sun");
    themeIcon.classList.add("bx-moon");
  }
});