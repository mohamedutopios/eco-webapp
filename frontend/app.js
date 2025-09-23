fetch("/api/hello")
  .then(res => res.json())
  .then(data => {
    document.getElementById("api-msg").textContent = data.message;
  })
  .catch(err => {
    document.getElementById("api-msg").textContent = "⚠️ Erreur API";
  });
