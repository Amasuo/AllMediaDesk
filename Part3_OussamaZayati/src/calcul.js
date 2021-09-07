function calculate(expression){
  const values = [];
  const operators = [];
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === ' ') {
      continue;
    }
    if (expression[i] >= '0' && expression[i] <= '9') {
      let buffer = '';
      while (i < expression.length && expression[i] >= '0' && expression[i] <= '9') {
        buffer += expression[i++];
      }
      values.push(parseInt(buffer));
      i--; 
    }
    else if (expression[i] === '(') {
      operators.push(expression[i]);
    }
    else if (expression[i] === ')') {
      while (operators[operators.length - 1] !== '(') {
        values.push(operation(operators.pop(), values.pop(), values.pop()));
      }
      operators.pop();
    }
    else if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*' || expression[i] === '/') {
     
      while (operators.length && hasParenthensies(expression[i], operators[operators.length - 1])) {
        values.push(operation(operators.pop(), values.pop(), values.pop()));
      }
      operators.push(expression[i]);
    }
    console.log("values ",values,operators)
  }
  while (operators.length) {
    values.push(operation(operators.pop(), values.pop(), values.pop()));
  }

  return values.pop();
};


const hasParenthensies = (op1, op2) => {
  if (op2 === '(' || op2 === ')') {
    return false;
  }
  if ((op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-')) {
    return false;
  }
  return true;
};

const operation = (op, b, a) => {
  
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        throw 'dividing by zero is impossible';
      }
      return (a / b);
  }
  return 0;
};
console.log('(5-2)+2 = ',calculate('(5-2)+2'));