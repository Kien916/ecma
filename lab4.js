function getFirstLast(array) {
  // Your code here
  if (array.length === 0) return [];
  if (array.length === 1) return [array[0]];
  return [array[0], array[array.length - 1]];
}

console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]
//bai2
function swapElements(arr) {
  // Your code here
  [arr[1], arr[3]] = [arr[3], arr[1]];
  return arr;
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]
//bai3
const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};
function getUserInfo({personalInfo: {name, contact: {email}}}) {
  // Your code here
  return {name, email};
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }
//bai4
function createProduct({ name, price, category = "general", inStock = true }) {
  // Your code here
  return{name, price , category, inStock};
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }