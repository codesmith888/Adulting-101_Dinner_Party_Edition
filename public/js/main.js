let modalButtons = document.getElementsByClassName("modalButton");
let closeModalButtons = document.getElementsByClassName("close");
let appetizerIFrame = document.getElementById("appURL");

for(let i=0; i<modalButtons.length; i++) {
  modalButtons[i].addEventListener("click", function(e) {
    e.preventDefault();
    let nearestModal = e.target.nextElementSibling;
    let nearestParent = e.target.parentElement
    let iframeElement = nearestParent.getElementsByTagName("IFRAME")[0]
    iframeElement.src = iframeElement.getAttribute('data-target')
    nearestModal.style.display = "block"
  })
}

for(let i=0; i<closeModalButtons.length; i++) {
  closeModalButtons[i].addEventListener("click", function(e) {
    e.preventDefault();
    let currentModal = e.target.parentElement
    currentModal.style.display = "none"
  })
}
