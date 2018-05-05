const X = [[0, 1, 1], [1, 0, 1], [1, 1, 0], [0, 0, 0]];
let W1 = [[Math.random(), Math.random()], [Math.random(), Math.random()]];
let W2 = [Math.random(), Math.random()];
//let W1 = [[0.1, -0.7], [0.5, 0.3]];
//let W2 = [0.2, 0.4];
let coef = 0.25;
let CO1 = null;
let CO2 = null;
let CS1 = null;
let erroReal = null;
let errorEstimada1;
let errorEstimada2;

let a;
logSig = value => 1 / (1 + Math.pow(Math.E, -value));
let iteraciones = 0;
while (iteraciones < 100000) {
  iteraciones += 1;
  let error = 0;
  for (const x in X) {
    if (X.hasOwnProperty(x)) {
      // CAPA OCULTA
      const element = X[x];

      CO1 = logSig(element[0] * W1[0][0] + element[1] * W1[0][1]);
      CO2 = logSig(element[1] * W1[1][1] + element[0] * W1[1][0]);

      CS1 = logSig(CO1 * W2[0] + CO2 * W2[1]);

      if (element[2] != CS1) {
        error += 1;
        erroReal = element[2] - CS1;
        delta = CS1 * (1 - CS1) * erroReal;
        W2 = [W2[0] + coef * CO1 * delta, W2[1] + coef * CO2 * delta];

        errorEstimada1 = CO1 * (1 - CO1) * W2[0] * delta;
        errorEstimada2 = CO2 * (1 - CO2) * W2[1] * delta;
        W1 = [
          [
            W1[0][0] + coef * element[0] * errorEstimada1,
            W1[0][1] + coef * element[1] * errorEstimada1
          ],
          [
            W1[1][0] + coef * element[0] * errorEstimada2,
            W1[1][1] + coef * element[1] * errorEstimada2
          ]
        ];
      }
    }
  }
}
console.log('──────────── PESOS FINALES────────────');
console.log('CAPA1', W2);
console.log('CAPA2', W1);

const test = element => {
  const co1_t = logSig(element[0] * W1[0][0] + element[1] * W1[0][1]);
  const co2_t = logSig(element[1] * W1[1][1] + element[0] * W1[1][0]);
  return logSig(co1_t * W2[0] + co2_t * W2[1]);
};

const t1 = test([0, 1, 1]);
const t2 = test([1, 0, 1]);
const t3 = test([1, 1, 0]);
const t4 = test([0, 0, 0]);

console.log('←←←←←☻ TEST DE APRENDIZAJE ☻•←←←');
console.log('←←←•←←←');
console.log('←←←←←☻ T1 ☻•←←←', t1);
console.log('←←←←←☻ T2 ☻•←←←', t2);
console.log('←←←←←☻ T3 •←←←', t3);
console.log('←←←←←☻ T4 ☻•←←←', t4);
