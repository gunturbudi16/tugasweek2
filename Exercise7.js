//1. Menyusun Barisan Bintang
var row = 6;
for(i=0;i<=row;i++){
  console.log("*");
};
//2. Menyusun Barisan Bintang Dengan Nested Looping
var row = 4
 for(i=0;i<row;i++){
   var hasil =''
  for(j=0;j<row;j++){
    hasil += "*";
  } 
  console.log(hasil);
 }
 //3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
 var row =5;
 for(i=1;i<=row;i++){
   var hasil =" "
   for(j=1;j<=i;j++){
     hasil +="*"
   }
   console.log(hasil);
 }