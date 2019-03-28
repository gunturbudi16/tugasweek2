//Tugas 1
/*
 BUATLAH KODE FUNCTION DISINI
*/
function shoutOut(){
    console.log("Halo Function!");
  }
  
  console.log(shoutOut()) // Menampilkan "Halo Function!" di console

  //tugas2
  /*
 BUATLAH KODE FUNCTION DISINI
*/
function calculateMultiply(num1,num2){
    return num1 * num2;
  }
  
  var num1 = 5;
  var num2 = 6;
  
  var hasilPerkalian = calculateMultiply(num1,num2);
  console.log(hasilPerkalian); // Menampilkan angka 30

  //Tugas3
  /*
 BUATLAH KODE FUNCTION DISINI
*/
function processSentence(name,age,address,hobby){
    return "Nama Saya " +name+","+"Umur Saya "+age+","+"alamat saya di "+address+"dan saya punya hobby "+ hobby+"!";
  }
  
  var name = "Agus";
  var age = 30;
  var address = "Jln. Malioboro, Yogjakarta";
  var hobby = "gaming";
  
  var fullSentence = processSentence(name,age,address,hobby);
  console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"