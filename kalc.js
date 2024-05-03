//1-mashq   eng katta son

// let a = [5,6,8,12,33,55,66];
// let b = [];
// for (let i = 0; i < a.length; i++){
//     if (a[i] > b){
//         b = a[i]
//     }
// }
// console.log(b);

//2-mashq  manfi sonlar 

// let arr = [-2,4,5,8,9-19,-33];
// let man = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < 0){
//         man.push(arr[i])
//     }
// }
// console.log(man);




// 3-mashq  

// let  arr = [2, -54, -12, -3, 7, 9];
// let juft = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 == 0){
//         juft.push(arr[i]);
//     }
// }
// console.log(juft);


// 4-mashq

// let  arr = [2,33,44,5,7, 9];
// let maxJuft = arr[0];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 == 0 && arr[i] >  maxJuft){
//         maxJuft = arr[i]
//     }
// }
// console.log(maxJuft);

// 5-mashq

let  arr = [12, 4, 12, 3, 7, 9];
let toq = arr[0];
for (let i = 0; i < arr.length; i++){
    if ((arr[i] > 0) && (arr[i] < toq) && (arr[i]  % 2 != 0)){
        toq = arr[i]
    }
}
console.log(toq);



// 6-mashq

// let a = [-8, -4, 12, 3, -7, 9];
// let juft = a [0];
// for (let i = 0; i < a.length; i++) {
//     if ((a[i] < 0) && (a[i] < juft) && (a[i] % 2 == 0)) {
//         juft = a[i]
//     }
// }
// console.log(juft);