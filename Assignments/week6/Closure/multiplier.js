function multiplier(num) {
  return function(x) {
    return num * x;
  };
}

const double = multiplier(2);
console.log(double(5)); 
