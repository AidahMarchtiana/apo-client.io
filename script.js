document.querySelector("form").addEventListener("submit", function (event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Semua kolom harus diisi!");
    event.preventDefault();
  }
});

// Show the location on button click or hover (optional)
const locationSection = document.querySelector("#location");
const showLocationButton = document.createElement("button");
showLocationButton.innerText = "Lihat Lokasi Warung";
document.querySelector("#contact").appendChild(showLocationButton);

// Initially hide the location
locationSection.style.display = "none";

// Show the location when the button is clicked
showLocationButton.addEventListener("click", () => {
  locationSection.style.display = locationSection.style.display === "none" ? "block" : "none";
});
