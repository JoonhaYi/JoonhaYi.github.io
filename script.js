fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar_div").innerHTML = data;
    addListeners();
  });

function addListeners() {
  const button = document.getElementById("toggle_sidebar");
  const sidebar = document.getElementById("navbar");

  button.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    button.classList.toggle("open");
  });

  document.addEventListener("click", function (event) {
    // alert(sidebar.classList.contains("open"));
    if (!button.contains(event.target)) {
      sidebar.classList.toggle("open");
      button.classList.toggle("open");
    }
  });
}
