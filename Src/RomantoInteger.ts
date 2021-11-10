function romanToInt(s: string): number {
  let num = 0;
  const l = s.split("");
  const d: { [index: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const r: { [index: string]: String[] } = {
    I: ["V", "X"],
    X: ["L", "C"],
    C: ["D", "M"],
  };
  const ra = Object.keys(r);
  for (let index = 0; index < l.length; index++) {
    const element = l[index];
    let add = d[element];
    if (
      ra.includes(element) &&
      index + 1 != l.length &&
      r[element].includes(l[index + 1])
    ) {
      add = d[l[index + 1]] - d[element];
      index++;
    }
    num += add;
  }
  return num;
}

const s = "LVIII";
console.log(romanToInt(s));
    