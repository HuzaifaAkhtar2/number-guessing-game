const number = Math.floor((Math.random() * 100) + 1);
const stats = document.querySelector('.stats');
var attempts = 0;

document.querySelector('.start-btn').addEventListener("click", () => {
    document.querySelector('.menu').style.display = "none";
    document.querySelector('.input').style.display = "block";
});

document.querySelector('.guess-btn').addEventListener("click", () => {
    const input = document.querySelector('.input-number');
    if (input.value == "") {
        stats.innerHTML = "Please enter a number...";
        input.value = ""
    }
    else if (input.value > 100 || input.value < 1) {
        stats.innerHTML = "Please enter the number in range <br> The range is 1 to 100";
        input.value = ""
    } else if (input.value > number) {
        stats.innerHTML = "Try Again! <br> Number you entered is greater than the correct number.";
        attempts = attempts + 1;
        input.value = ""
    } else if (input.value < number) {
        stats.innerHTML = "Try Again! <br> Number you entered is less than the correct number.";
        attempts = attempts + 1;
        input.value = ""
    } else if (input.value == number) {
        stats.innerHTML = `Congratulations! <br> You guessed the correct number in ${attempts} attempts <br> <b>Press F5 on your keyboard to play again</b>`;
        attempts = attempts + 1;
        input.value = ""
    } else {
        stats.innerHTML = "Please enter the right format <br> The format only allows whole numbers";
        input.value = ""
    }
    stats.style.display = "block";
});
