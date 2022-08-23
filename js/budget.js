console.log("budget connected");
const perPlayerCost = document.getElementById("perPlayerCost");
const playerExpenses = document.getElementById("playerExpenses");
document
  .getElementById("calculatePlayerCost")
  .addEventListener("click", function () {
    const playerExpense = parseInt(perPlayerCost.value) * 5;
    playerExpenses.innerText = playerExpense;
  });

function totalcalculation(a, b, c) {
  return a + b + c;
}

document
  .getElementById("calculateTotal")
  .addEventListener("click", function () {
    const manager = document.getElementById("manager");
    const coach = document.getElementById("coach");
    const playerExpense = parseInt(perPlayerCost.value) * 5;
    const managerCost = parseInt(manager.value);
    const coachCost = parseInt(coach.value);
    document.getElementById("totalExpenses").innerText = totalcalculation(
      managerCost,
      coachCost,
      playerExpense
    );
  });
