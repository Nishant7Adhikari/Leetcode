/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hash = [];
    let string = [];
    let pointer = 0;
    let max;
    for (let i = 0; i < s.length; i++) {
        for (let j = pointer; j < s.length; j++) {
            if (!string.includes(s[j])) {
                string.push(s[j]);
            }
            else{
                pointer++;
                break;
            }
        }
        hash.push(string.join(""));
        string = [];
    }
    if(hash.length){
        max = hash[0].length
    }
    else{
        console.log(hash)
        return 0;
    }
    for(let i = 1; i < hash.length; i++){
        if(hash[i].length > max)
            max = hash[i].length;
    }
    
    return max;
};