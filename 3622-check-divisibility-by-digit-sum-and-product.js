/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let digits = []
    let mod = n
    if (n == 0){
        digits = [0]
        return 0;
    }
    else{
        while(mod){
            digits.unshift(mod % 10)
            mod = Math.floor(mod/10)
        }
    }
    // plus
    let sum = 0
    for(let i = 0; i < digits.length; i++){
        sum += digits[i]
    }

    // product
    let product = 1
    for(let i = 0; i < digits.length; i++){
        product *= digits[i]
    }

    if(n % (sum + product) == 0)
        return true
    else 
        return false
};