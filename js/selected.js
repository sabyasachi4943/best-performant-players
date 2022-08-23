console.log("selected connected");
// neymar.parentElement.queryselctor("card-title").innertext;
document
  .getElementById("cardSection")
  .addEventListener("click", function (event) {
    const playerName = event.target.parentNode.childNodes[1]["innerText"];
    const playerCardButton = event.target;

    const playerSelection = document.getElementById("selectionPlayer");

    if (playerSelection.childNodes.length < 6) {
      if (playerCardButton.hasAttribute("disabled") == false) {
        const fragment = playerSelection
          .appendChild(document.createElement("ul"))
          .appendChild(document.createElement("li"));
        fragment.textContent = playerName;
        playerCardButton.setAttribute("disabled", true);
        playerCardButton.setAttribute("aria-disabled", true);
        playerCardButton.classList.add("disabled");
      }
    } else {
      alert("you can add only 5 players");
    }

    console.log(playerCardButton);
  });
