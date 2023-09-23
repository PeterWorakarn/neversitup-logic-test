// write permutation
const permutation = (value: string) => {
  let result: string[] = [];
  if (!value.length) return [];
  if (value.length === 1) return [value];

  for (let outerIdx = 0; outerIdx < value.length; outerIdx++) {
    const current = value[outerIdx];
    const remaining = value.slice(0, outerIdx).concat(value.slice(outerIdx + 1));
    const remainingPermuted = permutation(remaining);
    for (let idx = 0; idx < remainingPermuted.length; idx++) {
      const permutedArray = [current].concat(remainingPermuted[idx]);
      if (!result.includes(permutedArray.join(''))) {
        result.push(permutedArray.join(''));
      }
    }
  }

  return result;
}

console.assert(JSON.stringify(permutation('a')) === JSON.stringify(['a']), '#1')
console.assert(JSON.stringify(permutation('ab')) === JSON.stringify(['ab', 'ba']), '#2')
console.assert(JSON.stringify(permutation('abc')) === JSON.stringify(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']), '#3')
console.assert(JSON.stringify(permutation('aabb')) === JSON.stringify(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']), '#4')
console.assert(JSON.stringify(permutation('aaa')) === JSON.stringify(['aaa']), '#5')