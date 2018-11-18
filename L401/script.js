let numbers = prompt("Enter 3 number").split(" ");

function getMin(x, y, z) {
  if (x < y && x < z) {
    return x;
  } else if (y < x && y < z) {
    return y;
  } else return z;
}

let min = getMin(+numbers[0], +numbers[1], +numbers[2]);

console.log(min);
