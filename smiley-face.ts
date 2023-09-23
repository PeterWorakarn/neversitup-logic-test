// No Nose
// :)
// ;)
// :D
// ;D

// Have Nose
// :-)
// ;-)
// ;-D
// :-D

// :~)
// ;~)
// :~D
// ;~D


const isSmiley = (value:string) => {
  // write regex here: /[:|;][-|~]?[)|D]/gm
  const regex = new RegExp(/[:|;][-|~]?[)|D]/gm)
  return regex.test(value)
}

const countSmileys = (test: string[]) => {
  if (!test.length) return 0;

  const allSmiley = test.filter((eachTest) => {
    if (isSmiley(eachTest)) {
      return true;
    }
  })

  return allSmiley.length

}

console.assert(countSmileys([]) === 0, '#1')
console.assert(countSmileys([':)', ';(', ';}', ':-D']) === 2, '#2')
console.assert(countSmileys([':-)', ';~D', ':~D', ';~)']) === 4, '#3')
console.assert(countSmileys([';D', ':-(', ':-)', ';~)']) === 3, '#4')
console.assert(countSmileys([';]', ':[', ';*', ':$', ';-D']) === 1, '#5')
console.assert(countSmileys([';(', ':>', ':}', ':]']) === 0, '#6')