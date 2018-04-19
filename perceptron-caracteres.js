X = [
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  [1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
];
    
D = [
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
];
    
let Wi  = [];
let biasi  = [];
let e = null
let a = null
for (let i = 0; i < 4; i++) {
  Wi.push([]);
  biasi.push(Math.random());
  for (let  item  =  0; item  <  15; item++) {
    Wi[i].push(Math.random())
  }
}

for (const w in Wi) {
  console.info('')
  console.info('')
  console.info('')
  console.info('=========== bit: ',parseInt(w) + 1,'==========')
  console.info('')
  if (Wi.hasOwnProperty(w)) {
    while(true){
      let error = null;
      for (const x in  X) {
        //console.info('===========',x,'==========')
        if (X.hasOwnProperty(x)) {
          const  element  =  X[x];
          let acum = 0;
          for (let item = 0; item < element.length; item++) {
            const  pesos  =  Wi[w][item];
            acum = acum + (element[item] * pesos);
          }
          const result = acum + biasi[w];
          if (result >= 0) {
            a = 1;
          } else {
            a = 0;
          }
          //console.log('resultado esperado', D[w][x], 'resultado obtenido', a)
          while(D[w][x] !== a) {
            error += 1;
            let acum = 0;
            e = D[w][x] - a;
            biasi[w] = e + biasi[w];
            for (let i = 0; i < element.length; i++) {
              Wi[w][i] = Wi[w][i] + (e * element[i]);
              const  pesos  =  Wi[w][i];
              acum = acum + (element[i] * pesos);
            }
            const result = acum + biasi[w];
            if (result >= 0) {
              a = 1;
            } else {
              a = 0;
            }
            //console.log('resultado esperado', D[w][x], 'resultado obtenido', a)
          }
        }
      }
      if (!error) {
        console.info('pesos : ', Wi[w])
        console.info('bia : ', biasi[w])
        break;
      }
    } 
  }
}

const valor0 = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
const valor1 = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
const valor2 = [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1];
const valor3 = [1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1];
const valor4 = [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1];
const valor5 = [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1];
const valor6 = [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1];
const valor7 = [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
const valor8 = [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1];
const valor9 = [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1];

console.log('');
console.log('');
console.log('');
console.log('======= haciendo la prueba ======');
console.log('');
console.log('');
console.log('');
test(valor0);
test(valor1);
test(valor2);
test(valor3);
test(valor4);
test(valor5);
test(valor6);
test(valor7);
test(valor8);
test(valor9);
function test(valor) {
  let a
  let v = []
  for (const bits in Wi) {
    let result = 0;
    if (Wi.hasOwnProperty(bits)) {
      let acum = 0;
      for (let item = 0; item < valor.length; item++) {
        const  pesos  =  Wi[bits][item];
        acum = acum + (valor[item] * pesos);
      }
      const result = acum + biasi[bits];
      if (result >= 0) {
        a = 1;
      } else {
        a = 0;
      }
      v.push(a);
    }
  }
  console.log('result', v)
}