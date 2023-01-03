/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let objeto = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    nuevo = 0

    for( i=0; i < s.length; i++ ){   
        if(objeto[s[i]] < objeto[s[i+1]]){
            nuevo -= objeto[s[i]];
        }else {
            nuevo += objeto[s[i]]
        } 
    }
 
    return nuevo
}