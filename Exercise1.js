// 1. Newton Second Law

// Bunyi hukum II Newton adalah:

// Percepatan sebuah benda akan sebanding dengan gaya yang diberikan pada benda dan berbanding terbalik dengan massa benda. Arah percepatan benda sama dengan arah gaya total yang diberikan pada benda.

// Secara matematis hukum II Newton dirumuskan sebagai berikut: ΣF = m x a

// ΣF = resultan gaya (Newton)

// m = massa benda (kg)

// a = percepatan benda (m/s2)

// Berdasarkan keterangan di atas, buatlah sebuah algoritma / pseudocode untuk menghitung resultan gaya pada sebuah mobil yang memiliki massa benda 600 kg dan ketika didorong oleh tiga orang percepatannya adalah 2 m/s2!


//pseudocode

STORE "massaBenda" with any value
STORE "percepatanBenda" with any value
STORE "resultanGaya" without any value

CALCULATE "massaBenda" times "percepatanBenda"
SET "resultanGaya" value with calculation result

DISPLAY "resultanGaya"

2. Tahun Kabisat

Apa yang kamu ketahui tentang tanggal 29 Februari? Kamu pasti tahu jika suatu tahun memiliki tanggal 29 Februari berarti tahun tersebut merupakan tahun kabisat.

Dalam kalender Gregorian, tahun kabisat memiliki beberapa kriteria yaitu antara lain:

    Jika tahun habis di bagi 4 dan tidak habis di bagi 100, atau
    Jika tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400

Buatlah algoritma & pseudocode untuk menentukan apakah suatu tahun merupakan tahun kabisat atau bukan!

STORE "tahun" with any value

ELSE "tahun" % 4 == 0 && "tahun" %100 == 1
DO "tahun kabisat" 
ELSE IF "tahun" % 4 ==0 && "tahun" % 100 == 0 && "tahun" %400 == 1
DO "tahun kabisat"
ELSE 
DO "bukan tahun kabisat"
END IF

3. Laundry Day

Foxie akan mencuci pakaiannya menggunakan mesin cuci. Pakaian yang akan dicuci oleh Foxie sebanyak 20 dan akan dimasukkan ke mesin cuci. Mesin cuci akan dinyalakan jika semua pakaian Foxie sudah masuk ke mesin cuci.

Bantulah Foxie untuk menghitung jumlah pakaian yang akan dimasukkan ke mesin cuci menggunakan algoritma & pseudocode perulangan!

STORE "pakaian" with 0

WHILE "pakaian" <=20
ADD "pakaian" by 1

Display "Siap Cuci"

4. Periksa Kuku

Seorang guru akan memeriksa kuku siswa-siswinya yang sebanyak 40 orang dengan cara berkeliling kelas. Jika guru menemukan siswa/siswi yang memiliki kuku yang panjang maka guru akan menghukum siswa/siswi tersebut, jika tidak guru akan memuji siswa/siswi tersebut.

Buatlah algoritma & pseudocode untuk permasalahan diatas.

STORE "periksaKuku" to 1

WHILE "periksaKuku" <= 40

DISPLAY "periksaKuku"
CALCULATE "periksaKuku" mod 2
STORE "remainder" to the result of calculation
IF "remainder" equals to 0
  DISPLAY "menghukum siswa/siswi"
ELSE
  DISPLAY "memuji siswa/siswi"
