function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }

  

  function validParentheses(parens){
    var stack = [],
      i;
    
    for (i = 0; i < parens.length; i++) {
      if (parens[i] === '(') {
        stack.push(parens[i]);
      }
      else if('(' !== stack.pop()) {
        return false;
      }
    }
    
    return stack.length === 0;
  }