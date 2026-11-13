// // problem 1
// type Student = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   university: string;
// };

// const student: Student = {
//   name: "mabin",
//   age: 23,
//   isStudent: true,
//   university: "web",
// };
// console.log(student);

// // problem 2

// const calculatePrice = (price: number, quantity: number): number => {
//   return price * quantity;
// };

// console.log(calculatePrice(120, 20));

// // problem 3

// const products: string[] = ["Laptop", "Mobile", "Keyboard", "Mouse", "Monitor"];

// products.push("Iphone");

// products.map((e) => console.log(e));

// // problem 4

// const studentT: [string, number, boolean] = ["mir", 23, true];
// console.log(studentT[0]);
// console.log(studentT[1]);
// console.log(studentT[2]);

// // const studentT: [string, number, boolean] = ["mir", "23", true];

// // problem 5

// const createFullName = (
//   firstName: string,
//   lastName?: string,
//   greeting = "hello",
// ): string => {
//   if (!lastName) {
//     return firstName;
//   }
//   return firstName + " " + lastName;
// };

// console.log(createFullName("Mahafuzar", "Rahman"));
// console.log(createFullName("Mahafuzar"));

// // problem 6

// const getAverage = (...number: number[]): number => {
//   const avg = number.reduce((a: number, b: number) => a + b, 0) / number.length;
//   return avg;
// };

// console.log(getAverage(10, 20, 30, 40));

// // problem 7

// type Tproducts = {
//   id: number;
//   name: string;
//   price: number;
//   inStock: boolean;
//   categories: string[];
// };

// const product1: Tproducts = {
//   id: 1,
//   name: "Iphone",
//   price: 150000,
//   inStock: true,
//   categories: ["Iphone 15", "Iphone 16"],
// };
// const product2: Tproducts = {
//   id: 1,
//   name: "Loptop",
//   price: 60000,
//   inStock: true,
//   categories: ["HP", "Deel"],
// };
// const product3: Tproducts = {
//   id: 1,
//   name: "Monitor",
//   price: 18000,
//   inStock: true,
//   categories: ["HP 22fw", "Hp mfw22"],
// };

// // problem 8

// interface Iuser {
//   name: string;
//   email: string;
//   age: number;
//   isActive: boolean;
//   skill: string[];
// }

// const user1: Iuser = {
//   name: "Mabin",
//   email: "mabin@gmail.com",
//   age: 23,
//   isActive: true,
//   skill: ["html", "Css", "Js", " React"],
// };

// const user2: Iuser = {
//   name: "Chaitey",
//   email: "Chaitey@gmail.com",
//   age: 19,
//   isActive: true,
//   skill: ["html", "Css", "Js", " React"],
// };

// // Problem 9
