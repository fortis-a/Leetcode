/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
let nueva = 0;
let copia = x;  

    while(x > 0){
        nueva *= 10 
        nueva += x % 10;
        x /= 10;
        x = Math.floor(x);
       console.log(x) 
    }
    return nueva === copia
  }