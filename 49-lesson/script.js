function test() {
    if (true) {
      var x = 5;
      let y = 10;
    }
    console.log(x); // 5
    console.log(y); // ReferenceError: y is not defined
  }
  
  test();
  