var balancedStringSplit = function(s) {
  let matches = 0;
  const stack = [];

  stack.push(s[0]);

  console.log(stack);

  for (let i = 1; i < s.length; i++) {
    const top = stack[stack.length - 1];

    if (top !== undefined && top !== s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }

    if (stack.length === 0) {
      matches += 1;
    }
  }

  return matches;
};

console.log(balancedStringSplit('RLRRLLRLRL'));
