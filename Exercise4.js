var tanggal = 0; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var tahun= 1995; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var bulan= 1 ;// assign nilai variabel bulan disini! (dengan angka antara 1 - 12)

  if(typeof tanggal !== "number"){
    console.log("Please input number in input");
  }

    switch(bulan){
      case 1:
      bulan = "January"
      break;
      case 2:
      bulan = "February"
      break;
      case 3:
      bulan = "Maret"
      break;
      case 4:
      bulan = "April"
      break;
      case 5:
      bulan = "Mei"
      break;
      case 6:
      bulan = "Juni"
      break;
      case 7:
      bulan = "Juli"
      break;
      case 8:
      bulan = "Agustus"
      break;
      case 9:
      bulan = "September"
      break;
      case 10:
      bulan = "Oktober"
      break;
      case 11:
      bulan = "November"
      break;
      case 12:
      bulan = "Desember"
      break;
      default:
      console.log("tidak ada bulan segitu")
    };
        var bulan31=["January","Maret","Mei","Juli","Agustus","Oktober","Desember"];
        var bulan30=["April","Juni","September","November"];
        var bulan28=["February"];
      
        if(bulan31.indexOf(bulan)>=0){
          if (1 <= tanggal && tanggal <= 31) {
            console.log('Tanggal True',tanggal);
          }
          else {
            console.log("Invalid day, Please Input between 1-31", tanggal)
          }    
        }else if(bulan30.indexOf(bulan)>=0){
          if((tanggal<=1&&tanggal<=30)){
            console.log("Tanggal True",tanggal)
          }else{
            console.log("Invalid day, Please Input between 1-30",tanggal)
          }
        }else if(bulan28.indexOf(bulan)>=0){
          if((tanggal<=1&&tanggal>=28)){
            console.log("Tanggal True",tanggal)
          }else{
            console.log("Invalid day, Please Input between 1-28",tanggal)
          }
        }
        console.log(tanggal);
        if(tahun<1900||tahun>2200){
          console.log("Please Input Again");
        }
      

 console.log(tanggal +" " +bulan +" " + tahun);