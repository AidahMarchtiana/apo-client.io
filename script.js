document.querySelector("form").addEventListener("submit", function (event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Semua kolom harus diisi!");
    event.preventDefault();
  }
});
