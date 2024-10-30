import "./styles.css";

const rows = 3;
const cols = 3;

const app = document.getElementById("app");
const table = document.createElement("table");

for (let r = 0; r < rows; r++) {
  const tr = document.createElement("tr");
  for (let c = 0; c < cols; c++) {
    const td = document.createElement("td");

    tr.appendChild(td);
  }
  table.appendChild(tr);
}

app.appendChild(table);

var ans = Math.round(Math.random() * 100);
var count = 10;
guessContainer.textContent = count;
var guess;
setTimeout(function () {
  guess = Number(prompt("Guess a number between 1 and 100!"));
  check();
}, 500);
function check() {
  if (guess && guess <= 100 && guess >= 1 && count > 0 && guess !== ans) {
    var op = guess < ans ? "higher" : "lower";
    changeBG(guess, op);
    setTimeout(next, 500);
  } else {
    if (guess === ans) {
      changeBG(guess, null);
      alert("Nice job! You guessed correctly!");
    } else {
      alert("The answer was ".concat(ans, "."));
    }
  }
}
function next() {
  var op = guess < ans ? "higher" : "lower";
  guess = Number(
    prompt(
      "Try again, it's "
        .concat(op, " than ")
        .concat(guess, ".\n  You have ")
        .concat(count, " guesses left!")
    )
  );
  count--;
  guessContainer.textContent = count;
  check();
}
function changeBG(num, op) {
  if (op === "higher") {
    var _loopIt3 = 0;
    for (var _i = 1; _i <= num; _i++) {
      if (_loopIt3++ > 100001) {
        var csb_global = typeof window === "undefined" ? self : window;
        csb_global.infiniteLoopError = new RangeError(
          "Potential infinite loop: exceeded " +
            100001 +
            " iterations. You can disable this check by creating a sandbox.config.json file."
        );
        throw csb_global.infiniteLoopError;
      }
      document.getElementById("guess" + _i).style.backgroundColor = "red";
    }
  } else if (op === "lower") {
    var _loopIt4 = 0;
    for (var _i2 = 100; _i2 >= num; _i2--) {
      if (_loopIt4++ > 100001) {
        var csb_global = typeof window === "undefined" ? self : window;
        csb_global.infiniteLoopError = new RangeError(
          "Potential infinite loop: exceeded " +
            100001 +
            " iterations. You can disable this check by creating a sandbox.config.json file."
        );
        throw csb_global.infiniteLoopError;
      }
      document.getElementById("guess" + _i2).style.backgroundColor = "red";
    }
  } else {
    document.getElementById("guess" + num).style.backgroundColor = "limegreen";
  }
}
