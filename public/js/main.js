let appetizerModal = document.getElementById("appetizerModal");
let appetizerModalButton = document.getElementById("appetizerModalButton");
let closeAppetizerModal = document.getElementById("closeAppetizerModal");

appetizerModalButton.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("Button was clicked.")
  appetizerModal.style.display = "block";
})

closeAppetizerModal.addEventListener("click", function(e) {
  e.preventDefault();
  appetizerModal.style.display = "none";
})