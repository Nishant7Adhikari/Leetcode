/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hash = [];
    let string = [];
    let pointer = 0;
    let max = 0;
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
        if(string.length > max)
            max = string.length;
        string = [];
    } 
    return max;
}