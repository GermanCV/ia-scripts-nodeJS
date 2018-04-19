var X = [
  [5, -1, 1],
  [2, 6, 1],
  [3, 3, 1],
  [2, 1, -1],
  [-1, 1, -1],
  [1, -2, -1]
];

var Wi = [Math.random(), Math.random()];
var biasi = Math.random();
var a;
var e;

train(X, 10);

function train(valores, iteraciones) {
  for (var index = 1; index < iteraciones; index++) {
    console.log(
      "===================== iteracion",
      index,
      "============================"
    );
    for (const i in valores) {
      if (valores.hasOwnProperty(i)) {
        const element = valores[i];
        maping(element, Wi, biasi);
      }
    }
  }
}

function maping(x, w, b) {
  var temp = x[0] * w[0] + w[1] * x[1] + b;

  if (temp >= 0) {
    a = 1;
  } else {
    a = -1;
  }
  console.log("Peso: ", Wi, "   Bia:", biasi, "    result:", a);

  while (x[2] !== a) {
    e = x[2] - a;
    Wi = [w[0] + e * x[0], w[1] + e * x[1]];
    biasi = e + b;
    var temp1 = x[0] * Wi[0] + Wi[1] * x[1] + biasi;
    if (temp1 >= 0) {
      a = 1;
    } else {
      a = -1;
    }
    b = biasi;
    console.log(
      x,
      "Peso Nuevo: ",
      Wi,
      "   Bia nueva:",
      biasi,
      "  result:",
      a,
      "eee:",
      e
    );
  }
}

function test(p, w, b) {
  var result = p[0] * w[0] + w[1] * p[1] + b;
  var train;

  if (result >= 0) {
    train = 1;
  } else {
    train = -1;
  }
  return train;
}

var p1 = test([5, -1, 1], Wi, biasi);
console.log("p1", p1);
var p2 = test([2, 6, 1], Wi, biasi);
console.log("p2", p2);
var p3 = test([3, 3, 1], Wi, biasi);
console.log("p3", p3);
var p4 = test([2, 1, -1], Wi, biasi);
console.log("p4", p4);
var p4 = test([-1, 1, -1], Wi, biasi);
console.log("p4", p4);
var p4 = test([1, -2, -1], Wi, biasi);
console.log("p4", p4);
