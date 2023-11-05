/* 1.Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20. */
let arr=[10, 25, 5, 30, 15];
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 20) {
        total += arr[i];
      }
    }
    return total;
  }
  const result = sum(arr);
  console.log(result);


/*   2. Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’. */
  const getNewArray = function (strArray) {
    return strArray.filter(function (str) {
      return str.length >= 5 && str.includes('a');
      
    });
  };
  const sArray = ["apple", "banana", "cherry", "date", "fig"];
  const result1 = getNewArray(sArray);
  console.log(result1);


/*3. Implement an arrow function with feature below:
concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']
*/
  const concat = (...str) => {
    return str.reduce((result, item) => {
      if (Array.isArray(item)) {
        result.push(...item);
      } else {
        result.push(...String(item));
      }
      return result;
    }, []);
  };
  


 
  



