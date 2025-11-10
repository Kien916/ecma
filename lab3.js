// Function 1
// function multiply(a, b) {
//   return a * b;
// }
// const multiply = (a,b) => {return a * b;};
const multiply = (a, b) => a*b;

// Function 2
// function isPositive(number) {
//   return number >= 0;
// }
const isPositive = (number) => number >= 0;

// Function 3
// function getRandomNumber() {
//   return Math.random();
// }
const getRandomNumber = () => Math.random();

// Function 4
// document.addEventListener("click", function () {
//   console.log("Clicked!");
// });
document.addEventListener("click",() => console.log("Clicked!!"));
//bai2
// function createUser(name, age, isAdmin) {
//   if (name === undefined) name = "Anonymous";
//   if (age === undefined) age = 18;
//   if (isAdmin === undefined) isAdmin = false;

//   return {
//     name: name,
//     age: age,
//     isAdmin: isAdmin,
//   };
// } 
function createUser(name = "Anonymous", age = 18, isAdmin = false){
    return {name, age, isAdmin,};
};
//bai3
const mergeArrays = (...arrays) => [...arrays.concat()];
const sumAll = (...number) => number.reduce((total, num) => total + num,0);
//bai4
const shoppingCart = (Name, ...products) => {
  return {
    Name,  // tên khách hàng
    products,      // danh sách sản phẩm (mảng)
    totalItems: products.length, // tổng số sản phẩm
  };
};
console.log(shoppingCart("Kien", "Book", "Pen", "Notebook"));
////

