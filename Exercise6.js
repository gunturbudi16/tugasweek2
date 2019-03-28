//1. Melakukan Looping Menggunakan While
var angka = 2;
while(angka<=20){
  console.log(angka +" - I Love Coding");
  angka+=2;
};

var angka = 20;
while(angka>0){
  console.log(angka +" - I will become fullstack developer");
  angka-=2;
};

//2. Melakukan Looping Menggunakan For
for(angka=1;angka<=20;angka++){
    console.log(angka +" - I Love Coding");
}

for(angka=20;angka>0;angka--){
   console.log(angka +" - I Will Become FullStack Developer");
}

//3. Angka Ganjil dan Genap
//counter 1-100
for(var angka =1;angka<=100;angka++){
    console.log(angka);
  }
//Genap Ganjil
for(angka=1;angka<=100;angka++){
    if(angka%2==0){
      console.log(angka + " Genap");
    }else{
      console.log(angka + " Ganjil")
    }
};
//Kelipatan 2
for(var angka =0;angka<=100;angka+=2){
    console.log(angka + " Angka Kelipatan 2");    
  };
  //Kelipatan 5
for(var angka =100;angka>0;angka+=5){
    console.log(angka + " Angka Kelipatan 5");    
  };
  //Kelipatan 9
for(var angka =9;angka<=100;angka+=9){
    console.log(angka + " Angka Kelipatan 9");    
  };
//angka kelipatan 3
for(var angka =0;angka<=100;angka++){
    if(angka%3==0){
      console.log(angka + " angka Kelipatan 3");
    }
};

//angka kelipatan 6
for(var angka =1;angka<=100;angka++){
    if(angka%6==0){
      console.log(angka + " angka Kelipatan 6");
    }
};
//angka kelipatan 10
for(var angka =1;angka<=100;angka++){
    if(angka%10==0){
      console.log(angka + " angka Kelipatan 10");
    }
};