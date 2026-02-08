function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goToForm() {
  show("form");
}

function startAnalyse() {
  show("loading");

  let time = 30;
  const cd = document.getElementById("countdown");

  const interval = setInterval(() => {
    time--;
    cd.innerText = time + " s";
    if (time <= 0) {
      clearInterval(interval);
      calculate();
    }
  }, 1000);
}

function calculate() {
  const home = document.getElementById("home").value;
  const away = document.getElementById("away").value;
  const hp = parseInt(document.getElementById("homePower").value);
  const ap = parseInt(document.getElementById("awayPower").value);

  document.getElementById("matchTitle").innerText = home + " vs " + away;

  // Analyse logique
  let homeGoals = Math.round((hp + Math.random() * 2));
  let awayGoals = Math.round((ap + Math.random() * 2) - 1);
  if (awayGoals < 0) awayGoals = 0;

  document.getElementById("score").innerText = homeGoals + " - " + awayGoals;

  // 1X2
  let result = "X";
  if (homeGoals > awayGoals) result = "1";
  if (awayGoals > homeGoals) result = "2";
  document.getElementById("winner").innerText = result;

  // MT / FT
  const mt = Math.random() > 0.5 ? result : "X";
  document.getElementById("mtft").innerText = mt + " / " + result;

  // Over Under
  document.getElementById("ou").innerText =
    (homeGoals + awayGoals) >= 3 ? "Over 2.5" : "Under 2.5";

  show("result");
}

function restart() {
  show("intro");
}
