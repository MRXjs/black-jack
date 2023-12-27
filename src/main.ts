class BlackJack {
  cardGenerateBtn: HTMLButtonElement = document.querySelector("#generateBtn")!;
  restartBtn: HTMLButtonElement = document.querySelector("#restartBtn")!;
  currentTotalValue: number = 0;

  main(cardGenerateBtn: HTMLButtonElement, restartBtn: HTMLButtonElement) {
    let randomNumber: number;
    do {
      randomNumber = Math.floor((Math.random() * 100) / 7.6);
    } while (randomNumber === 0);

    this.currentTotalValue === undefined || 0
      ? (this.currentTotalValue = randomNumber)
      : (this.currentTotalValue += randomNumber);

    const img: HTMLImageElement = document.createElement("img");
    img.src = `./img/${randomNumber}.png`;
    img.classList.add("card");
    document.querySelector("#cardContainer")?.appendChild(img);

    const currentTotalEle = document.querySelector("#currentTotal")!;
    currentTotalEle.textContent = `Current total : ${this.currentTotalValue}`;

    const showResultEleText: HTMLHeadElement =
      document.querySelector("#result")!;

    if (this.currentTotalValue === 21) {
      showResultEleText.textContent = "Congragulation Your Win 🎉";
      cardGenerateBtn.classList.add("hidden");
      restartBtn.classList.remove("hidden");
      alert("Congragulation Your Win 🎉");
    } else if (this.currentTotalValue > 21) {
      showResultEleText.textContent = "Sorry Your FAil 😢";
      showResultEleText.classList.add("fail");
      cardGenerateBtn.classList.add("hidden");
      restartBtn.classList.remove("hidden");
      alert("Sorry Your FAil 😢");
    }
  }
}

const blackJack = new BlackJack();
blackJack.cardGenerateBtn.addEventListener("click", () => {
  blackJack.main(blackJack.cardGenerateBtn, blackJack.restartBtn);
});
blackJack.restartBtn.addEventListener("click", () => {
  console.log(window.location.reload());
});
