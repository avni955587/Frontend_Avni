function greet(name) {
  return function() {
    console.log("Hello " + name);
  };
}

let g = greet("Avni");
g();
