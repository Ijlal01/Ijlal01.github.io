/* runs test to see if expected argument is === to value returned by function2test argument */
      function myFunctionTest(expected, found) {
        if (expected === found) {
          return "TEST SUCCEEDED";
        } else {
          return "TEST FAILED.  Expected " + expected + " found " + found;
        }
      }

  
      //4 function sum() with reduce :
      function sum(array) {
        return array.reduce((acc, curr) => {
          acc += curr;
          return acc;
        }, 0);
      }
      console.log(
        "Expected output of sum([1,2,3,4]) is 10  " +
          myFunctionTest(10, sum([1, 2, 3, 4]))
      );

      //4 function multiply() with reduce :
      function multiply(array) {
        return array.reduce((acc, curr) => {
          acc *= curr;
          return acc;
        }, 1);
      }
      console.log(
        "Expected output of product([1,2,3,4]) is 24  " +
          myFunctionTest(24, multiply([1, 2, 3, 4]))
      );

      //5 funtion reverse() with map :
      function reverse(str) {
        // let arrStr = str.split(''); //splits a word to character array.
        let arrStr = str.split(" ");
        let res = [];
        arrStr.map(w => {
            let wArr = w.split('');
            let temp = [];
            wArr.map(c => temp.unshift(c));
            res.unshift(temp.join(""));
        });
        return res.join(" ");
      }

      console.log(
        'Expected output of reverse("jag testar") is "ratset gaj" ' +
          myFunctionTest("ratset gaj", reverse("jag testar"))
      );

      //7 funtion filterLongWords() with filter :
      function filterLongWords(array, wordLengthToCompareWith) {
        const result = array.filter(
          (word) => word.length > wordLengthToCompareWith
        );
        return result;
      }
      console.log(" ===> "+ filterLongWords(["beta", "alpha male", "zeta", "delta"],7));

      //8 a-
      const a = [1, 3, 5, 3, 3];
      const b = a.map(function (elem, i, array) {
        return elem * 10;
      });

      //8 b-
      const c = a.filter(function (elem, i, array) {
        return elem === 3;
      });

      //8: c-
      const d = a.reduce(function (accumulator, elem) {
        return accumulator * elem;
      }, 1);

      console.log(" ===> "+ b);
      console.log(" ===> "+ c);
      console.log(" ===> "+ d);