/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
   const nueva = s.trim()
    let contador = 0;
    
    for(i= nueva.length -1; i >= 0; i--){
        if(nueva[i] == " "){
            break
        }
        contador += 1
   } 
   return contador
};
