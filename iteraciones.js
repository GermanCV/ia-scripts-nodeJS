
//Variables de emtrenamiento
var X = [
  [2, 1, 1],
  [0, -1, 1],
  [-2, 1, -1],
  [0, 2, -1]
]
var X1 = [
  [1, 1, 1],
  [1, 0, 1],
  [0, 1, 1],
  [0, 0, 0]
]
var Wi = [Math.random(), Math.random() ]
var biasi = Math.random()
var a
var e

for (var index = 1; index < 5; index++) {
  console.log('===================== iteracion' ,index,'============================')  
  for (const i in X1) {
    if (X1.hasOwnProperty(i)) {
      const element = X1[i];
      maping(element, Wi, biasi)    
    }
  }
}


function maping(x, w, b) {
  var temp = x[0]*w[0]+w[1]*x[1]+b

  if (temp >= 0) {
    a = 1
  } else {
    a = 0
  }
  console.log('Peso: ', Wi,'   Bia:', biasi, '    result:', a)

  while (x[2]!=a) {
    e = x[2] - a
    Wi = [w[0]+e*x[0] , w[1]+e*x[1]]
    biasi = e + b
    var temp1 = x[0]*Wi[0]+Wi[1]*x[1]+biasi
    if (temp1 >= 0) {
      a = 1
    } else {
      a = 0
    }
    console.log('Peso Nuevo: ', Wi,'   Bia nueva:', biasi, '  result:', a)
  }
}

console.log('peso final: ',Wi, '         bia final: ', biasi)
function test(p,w,b) {
  var result = p[0]*w[0]+w[1]*p[1]+b
  var train

  if (result >= 0) {
    train = 1
  } else {
    train = 0
  }
  return train
}

var p1 = test([0,0,0], Wi, biasi)
console.log('p1', p1)
var p2 = test([0,1,0], Wi, biasi)
console.log('p2', p2)
var p3 = test([1,0,0], Wi, biasi)
console.log('p3', p3)
var p4 = test([1,1,1], Wi, biasi)
console.log('p4', p4)