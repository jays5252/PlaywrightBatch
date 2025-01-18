function doOuterFunctionStuff(nr) {
    console.log("Outer function");
    doInnerFunctionStuff(nr);
    function doInnerFunctionStuff(x) {
      console.log(x + 7);
      console.log("I can access outer variables:", nr);
    }
  }
  doOuterFunctionStuff(2); 
  
  // Outputs: Outer function
  // 9
  // I can access outer variables: 2
  
  