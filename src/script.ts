// const myString = "10000";

// const addNumber = (a: number, b: number) => {
//   return a + b;
// };

// console.log(addNumber(10, 20));

// // Array and Tuple

// const arr: string[] = ["Programming", "jero"];

// const numArr: number[] = [1, 6, 4];

// const dhakaLatLong: readonly [Number, number] = [12.23423, 23.46564];

// // dhakaLatLong.push(1000000);

// const getUserName = (fristName: string, lastName?: string) => {
//   if (!lastName) {
//     return fristName;
//   }

//   return fristName + " " + lastName;
// };

// getUserName("Mahafuzar");

// const greatings = (fullName: string, greating = "hello"): void => {
//   console.log(fullName, greating);
// };

// greatings("Mabin");

// const sum = (...number: number[]) => {
//   return number.reduce((total, sum) => total + sum, 0);
// };

// console.log(sum(1, 3, 4, 7));

// const argument = (
//   ...args: [name: string, age: number, isActive: boolean]
// ): void => {
//   const [name, age] = args;
//   console.log(name + " is " + age);
// };
// argument("mabin", 23, true);

// type Address = {
//   HousName: string;
//   HousNum: number;
// };

// type TUser = {
//   name: string;
//   age: number;
//   isActive: boolean;
//   action: () => void;
//   addres: Address;
// };

// interface IUser {
//   name: string;
//   age: number;
//   isActive: boolean;
//   action: () => void;
// }

// const user: TUser = {
//   name: " mabin",
//   age: 23,
//   isActive: true,
//   action: () => console.log("object"),
//   addres: {
//     HousName: "abcd",
//     HousNum: 1233,
//   },
// };
