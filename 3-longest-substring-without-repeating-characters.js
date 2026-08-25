/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let string = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (!string.includes(s[j]))
                string.push(s[j]);
            else
                break;
        }
        if(string.length > max)
            max = string.length;
        string = [];
    } 
    return max;
}
