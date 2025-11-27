function password(password) {
  return function(guess) {
    return guess === password;
  };
}

const check = password("abcd");
console.log(check("abcd")); 
console.log(check("xyz"));  
