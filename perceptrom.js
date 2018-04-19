console.log('========================= PERCEPTROM =======================')
var P1 = [2, 1, 1]
var P2 = [0, -1, 1]
var P3 = [-2, 1, -1]
var P4 = [0, 2, -1]
var W = [-0.7, 0.2 ]
var bias = 0.5



//TODO AJUSTANDO PESOS
var a
var e
aprendizaje(P1,W,bias)


  
while (P1[2]!=a) {
  e = P1[2] - a
  var Wn = [W[0]+e*P1[0] , W[1]+e*P1[1]]
  var biasn = e + bias
  aprendizaje(P1,Wn,biasn)
  console.log('Ajustando pesos', Wn, biasn)
}

function aprendizaje(p,w,b) {
  var netabias = p[0]*w[0]+w[1]*p[1]+b

  if (netabias >= 0) {
    a = 1
  } else {
    a = -1
  }
  console.log('iteracion',netabias)
  console.log('a = ',a)
  return netabias
}
