// //1
// // Mavjud obyekt
// var obyekt = {
//     nom: "Misol",
//     umr: 25,
//     xususiyat: "yangi"
//   };
  
//   // Xususiyatni o'chirish
//   delete obyekt.xususiyat;
  
//   // Konsolga chiqarish
//   console.log(obyekt);

  


//2
var obyekt = {
    nom: "Misol",
    umr: 25,
    xususiyat: "yangi"
  };
  
  var yangiObyekt = {
    nom: obyekt.nom,
    umr: obyekt.umr
  };
  
  console.log(yangiObyekt);
  


//3
// Mavjud obyekt
// var obyekt = {
//   nom: "Misol",
//   umr: 25,
//   xususiyat: "yangi"
// };

// var xususiyatlar = [];

// for (var xususiyat in obyekt) {
//   xususiyatlar.push(xususiyat + ": " + obyekt[xususiyat]);
// }

// console.log(xususiyatlar);