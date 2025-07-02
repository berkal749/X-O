var x = true;
var matrix = [];
var matrixx = [];
var matrixo = [];
var cells = {
  one: document.getElementById("1"),
  two: document.getElementById("2"),
  three: document.getElementById("3"),
  four: document.getElementById("4"),
  five: document.getElementById("5"),
  six: document.getElementById("6"),
  seven: document.getElementById("7"),
  eight: document.getElementById("8"),
  nine: document.getElementById("9"),
};
Object.values(cells).forEach((cell) => {
  cell.addEventListener("click", function () {
    check(cell);
    checkvictory();
  });
});
function check(number) {
  if (number.innerText === "X" || number.innerText === "O") return;
  matrix.push(number);
  if (x) {
    matrixx.push(number);
    number.innerText = "X";
  } else {
    matrixo.push(number);
    number.innerText = "O";
  }
  x = !x;
}
function reset() {
  // Reset all cells
  Object.values(cells).forEach((cell, index) => {
    cell.innerText = (index + 1).toString();
  });
  x = true;
  matrix = [];
  matrixx = [];
  matrixo = [];
}
function checkvictory() {
  const winningCombinations = [
    [cells.one, cells.two, cells.three],
    [cells.four, cells.five, cells.six],
    [cells.seven, cells.eight, cells.nine],
    [cells.one, cells.four, cells.seven],
    [cells.two, cells.five, cells.eight],
    [cells.three, cells.six, cells.nine],
    [cells.one, cells.five, cells.nine],
    [cells.three, cells.five, cells.seven],
  ];
  if (
    winningCombinations.some((combo) =>
      combo.every((cell) => matrixx.includes(cell))
    )
  ) {
    alert("X wins");
    reset();
    return;
  }
  if (
    winningCombinations.some((combo) =>
      combo.every((cell) => matrixo.includes(cell))
    )
  ) {
    alert("O wins");
    reset();
    return;
  }
  if (matrix.length === 9) {
    alert("Draw!");
    reset();
  }
}
