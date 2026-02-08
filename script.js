function startIA() {
  const home = document.getElementById("home").value;
  const away = document.getElementById("away").value;

  document.getElementById("formCard").classList.add("hidden");
  document.getElementById("loadingCard").classList.remove("hidden");

  let time = 30;
  const timer = document.getElementById("timer");

  const countdown = setInterval(() => {
    time--;
    timer.innerText = "00:" + (time < 10 ? "0" + time : time);

    if (time <= 0) {
      clearInterval(countdown);
      showResult(home, away);
    }
  }, 1000);
}

function showResult(home, away) {
  document.getElementById("loadingCard").classList.add("hidden");
  document.getElementById("resultCard").classList.remove("hidden");

  document.getElementById("matchTitle").innerText = home + " vs " + away;

  const scores = ["0-0", "1-0", "1-1", "2-1"];
  const pick = scores[Math.floor(Math.random() * scores.length)];

  document.getElementById("score").innerText = pick;
  document.getElementById("winner").innerText =
    pick === "0-0" || pick === "1-1" ? "Draw" : pick.startsWith("1-0") ? home : away;

  document.getElementById("ou").innerText =
    pick === "0-0" || pick === "1-0" ? "Under 1.5" : "Over 1.5";
}
