window.onload = function () {
  // Parse the URL
  const urlParams = new URLSearchParams(window.location.search);
  const toastDiv = document.getElementById("toast");
  const button = toastDiv.querySelector("button");

  if (urlParams.get("success") === "true") {
    toastDiv.style.display = "flex";
  }

  if (urlParams.get("error")) {
    toastDiv.style.display = "flex";
    toastDiv.querySelector("p").innerText = `${urlParams.get(
      "error",
    )}. Please try again.`;
  }

  // Add onclick handler to toast close button
  button.onclick = function () {
    toastDiv.style.display = "none";
    window.history.replaceState({}, document.title, "/");
  };

  // Smooth scroll to #contact when clicking #holler button
  const hollerButton = document.getElementById("holler");
  const contactSection = document.getElementById("contact");

  hollerButton.addEventListener("click", function (event) {
    event.preventDefault();
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
};
