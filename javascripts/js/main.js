// let array=[5,6,7,8,9,32,45,12];
// let result=0;
// for (let index = 0; index < array.length; index++) {
//     if (array[index]%2==1) {
//         result+=array[index];
//     }  
// }
// console.log(result);
//----------------------------------------------------------------------------------------------
//task1
// let word="text";
// function test(word){
//     if (word==word.toLowerCase() || word==word.toUpperCase()) {
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }

// test(word)
//----------------------------------------------------------------------------------------------------
// task2
// function test(a,b){
//     if (a+b===100 && (a===100||b===100) ){
//        return true;
//     }
//     else{
//        return false;
//     }
// }
// console.log(test(0,100));
// ---------------------------------------------------------------------------------------------------------
// task3
// function kredit(amount, months_count) {
//     let remainder=amount%months_count;
//     let monthly=(amount-remainder)/months_count;
//     for (var i = 1; i < months_count; i++) {
//         console.log(`${i}-ci ayin odenisi ${monthly}`);
//     }
//     console.log(`${i}-ci ayin odenisi ${monthly+remainder}`);
// }
// kredit(2000,6)
// ---------------------------------------------------------------------------------------------------------------
// task4
//yuksek seref 95-100
//seref 85-94
//adi 65-84
//kesilmish 0-64
// let array = [{ name: "Murad", degree: 90 }, { name: "Ibrahim", degree: 61 }, { name: "Gulchin", degree: 97 }];
// function CheckDegree(a) {
//    for (let i = 0; i < array.length; i++) {
//       if (array[i].degree >= 95 && array[i].degree <= 100 && a >= 95 && a <= 100) {
//          console.log(`${array[i].name} ${a} ----> Yuksek Seref Diplomu`);
//       }
//       if (array[i].degree >= 85 && array[i].degree <= 94 && a >= 85 && a <= 94) {
//          console.log(`${array[i].name} ${a} ----> Seref Diplomu`);
//       }
//       if (array[i].degree >= 64 && array[i].degree <= 84 && a >= 65 && a <= 84) {
//          console.log(`${array[i].name} ${a} ----> Adi Diplomu`);
//       }
//       if (array[i].degree >= 0 && array[i].degree <= 64 && a >= 0 && a <= 64) {
//          console.log(`${array[i].name} ${a} ----> Kesir`);
//       }
//    }
// }
// CheckDegree(85)

//task5
//bir functionunuz var parametr olaraq bir array ve bir callback function qaytarir: 
//function gelen arraydaki ededleri 5-e vurmalidir.
//(parametrden gelen callback functionunu istifade etmekle)
function firstfunction(array,callbackfunction){
   let result = [];
   for (let i = 0; i < array.length; i++) {
      result[i]=callbackfunction(array[i])
   }
   console.log(result);
}
function secondfunction(value){
   return value*5;
}
firstfunction([2,3,4,5],secondfunction)
