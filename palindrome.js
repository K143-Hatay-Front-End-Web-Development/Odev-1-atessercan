let isNotPalindrome= true;
let i=999,j;

/*
  checkPalindrome(), number tipinde bir parametre alır :

    # toString() metodu number tipini String tipine çevirir.

    # split("") metodu String ifadenin her bir karakterini alt  stringlere ayırarak bir dizi haline getirir.

    # reverse() metodu karakterlere ayrılan alt stringleri ters şekilde sıralar.

    # join("") metodu ise ters sıralanmış diziyi tekrar bir String haline getirir.

  checkPalindrome(), ters çevrilmiş String ve orijinal String arasında karşılaştırma yapar ve true sonucu alırsa isNotPalindrome değişkenini false olarak değiştirerek ekrana bulduğu palindromu basar.
*/
const checkPalindrome = (num) => {
  if(num.toString() === num.toString().split("").reverse().join("")){
    isNotPalindrome=false
    console.log("Largest Palindrome : " + i + " * " + j + " = " + num)
  } 
}    

/*
 İç-içe while döngüsü isNotPalindrome değişkeni false olmadığı sürece
 checkPalindrome() fonksiyonuna i*j argümanını gönderir. 

*/
while(i > 899){
  j=999; 
  while(j > 899 && isNotPalindrome){
    checkPalindrome(i * j)
    j--;
  }
  i--;
}

/* 

900'ler basamığındaki iki sayının çarpımıyla bulunan 
ilk palindrome, doğal olarak 3 basamaklı 2 tam sayının 
çarpımıyla bulunabilecek en büyük palindrome olacaktır.

Bu yüzden while döngülerinin sınırları 899 - 999 olarak belirlendi.
Daha düşük sayılar üzerinden döngü çalıştırmaya gerek yoktur.

*/