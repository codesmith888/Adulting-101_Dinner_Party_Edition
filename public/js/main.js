let modalButtons = document.getElementsByClassName("modalButtonEvent");
let closeModalButtons = document.getElementsByClassName("closeModal");
let appetizerIFrame = document.getElementById("appURL");

for(let i=0; i<modalButtons.length; i++) {
  modalButtons[i].addEventListener("click", function(e) {
    e.preventDefault();
    let nearestModal = e.target.nextElementSibling;
    let nearestParent = e.target.parentElement
    let iframeElement = nearestParent.getElementsByTagName("IFRAME")[0]
    iframeURL = iframeElement.getAttribute('data-target')
    if (!iframeURL.includes("https")) {
      iframeURL = iframeURL.replace("http", "https")
    }
    iframeElement.src = iframeURL
    nearestModal.style.display = "block"
  })
}

//figure out which modal to close//
for(let i=0; i<closeModalButtons.length; i++) {
  closeModalButtons[i].addEventListener("click", function(e) {
    e.preventDefault();
    let currentModal = e.target.parentElement.parentElement
    currentModal.style.display = "none"
  })
}





