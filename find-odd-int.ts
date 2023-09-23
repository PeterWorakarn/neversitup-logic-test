const countValue = (value:number, list: number[]) => {
  let quantity = 0;
  list.map((eachValue) => {
    if (eachValue === value) {
      quantity = quantity + 1;
    }
    return true;
  })
  return quantity;
}

const findOddInt = (value:number[]) => {
  if (value.length === 1) {
    return value[0];
  }
  
  let oddInt = 0
  const checkValue:number[] = []

  for (let index = 0; index < value.length; index++) {
    if (!checkValue.includes(value[index])) {
      checkValue.push(value[index]);
      if (countValue(value[index], value) % 2 !== 0) {
        oddInt = value[index];
        break;
      }
    }
  }

  return oddInt;
}

console.assert(findOddInt([7]) === 7, '#1')
console.assert(findOddInt([0]) === 0, '#2')
console.assert(findOddInt([1,1,2]) === 2, '#3')
console.assert(findOddInt([0,1,0,1,0]) === 0, '#4')
console.assert(findOddInt([1,2,2,3,3,3,4,3,3,3,2,2,1]) === 4, '#5')