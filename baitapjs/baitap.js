// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10
// const khanh = (functions) => {
//     return (x) => {
//         for (let i = functions.length - 1; i >= 0; i--) {
//             x = functions[i](x)
//         }
//         return x
//     }
// }
// const functions = [x => x + 1, x => x * x, x => 2 * x];

// const ketqua = khanh(functions);
// const functions = [x => 10 * x, x => 10 * x, x => 10 * x];
// const x = 1;
// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10
// const filter = function(arr, fn) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };
