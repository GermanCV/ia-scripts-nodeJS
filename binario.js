const d = [];
for (let i = 65; i < 91; i++) {
  const binary = i.toString(2);
  console.log(binary);
  console.log(parseInt(binary, 2));
  const char = String.fromCharCode(parseInt(binary, 2));
  d.push([]);
  for (const item in binary) {
    if (binary.hasOwnProperty(item)) {
      const element = binary[item];
      d[i - 65].push(element);
    }
  }
  console.log(char);
}

console.log(d)