
function getJoke() {
  document.getElementById("setup").innerText = "Loading...";
  document.getElementById("punch").innerText = "";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("setup").innerText = data.setup;
      document.getElementById("punch").innerText = data.punchline;
    })
    .catch(() => {
      document.getElementById("setup").innerText = "Error loading joke";
    });
}

document.getElementById("btn").addEventListener("click", getJoke);


getJoke();