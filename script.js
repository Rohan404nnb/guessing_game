const max = prompt("enter a max number you want to guess");
let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("enter your Guessing Number ");

while (true) {
  if (guess == "quit") {
    console.log("you quit the game");
    break;
  }
  if (guess == random) {
    console.log(
      `congratulation you guess the right number !!!! your number is ${random}`
    );
    break;
  } else if (guess > random) {
    guess = prompt("hint: your guess number is larger,guess little bit small ");
  } else if (guess < random) {
    guess = prompt(
      " hint: your guess number is small,guess little bit larger  "
    );
  } else {
    guess = prompt("you are worng can plz try again ");
  }
}
