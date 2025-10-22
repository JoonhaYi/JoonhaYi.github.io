// inserting nabar html to the page header
fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar_div").innerHTML = data;

    // adding listeners to the sidebar button one the navbar loads
    addListeners();
  });

function addListeners() {
  // extracting DOM
  const button = document.getElementById("toggle_sidebar");
  const sidebar = document.getElementById("navbar");

  button.addEventListener("click", () => {
    // toggling on css class open
    sidebar.classList.toggle("open");
    button.classList.toggle("open");
  });

  // closing the sidebar if an arbitrary click is detected
  document.addEventListener("click", function (event) {
    // checking if the sidebar is already open
    if (!button.contains(event.target) && sidebar.classList.contains("open")) {
      sidebar.classList.toggle("open");
      button.classList.toggle("open");
    }
  });
}
