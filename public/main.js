"use strict";
class BlackJack {
    constructor() {
        this.cardGenerateBtn = document.querySelector("#generateBtn");
        this.restartBtn = document.querySelector("#restartBtn");
        this.currentTotalValue = 0;
    }
    main(cardGenerateBtn, restartBtn) {
        var _a;
        let randomNumber;
        do {
            randomNumber = Math.floor((Math.random() * 100) / 7.6);
        } while (randomNumber === 0);
        this.currentTotalValue === undefined || 0
            ? (this.currentTotalValue = randomNumber)
            : (this.currentTotalValue += randomNumber);
        const img = document.createElement("img");
        img.src = `./img/${randomNumber}.png`;
        img.classList.add("card");
        (_a = document.querySelector("#cardContainer")) === null || _a === void 0 ? void 0 : _a.appendChild(img);
        const currentTotalEle = document.querySelector("#currentTotal");
        currentTotalEle.textContent = `Current total : ${this.currentTotalValue}`;
        const showResultEleText = document.querySelector("#result");
        if (this.currentTotalValue === 21) {
            showResultEleText.textContent = "Congragulation Your Win 🎉";
            cardGenerateBtn.classList.add("hidden");
            restartBtn.classList.remove("hidden");
            alert("Congragulation Your Win 🎉");
        }
        else if (this.currentTotalValue > 21) {
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
