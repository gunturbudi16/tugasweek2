function xo(str) {
    // you can only write your code here!
    var countx =0
    var counto = 0
    for(i=0;i<str.length;i++){
        if(str[i]==="x"){
        countx += 1
        }else{
        counto += 1
        }
    }if(countx===counto){
        return true
    }else{
        return false
    }
  };
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true