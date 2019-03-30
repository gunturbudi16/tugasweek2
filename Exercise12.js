function konversiMenit(detik) {
    // you can only write your code here!
    var menit1 = Math.floor(detik/60);
    var detik1 = detik%60;
    if(detik1 < 10 && detik1 >=0){
      return menit1 +":0" + detik1; 
    }else{
      return menit1 + ":" + detik1;
    }
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00