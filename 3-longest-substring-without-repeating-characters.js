/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let string = [];
    let size = s.length;
    let max = 0;
    let j;
    for (let i = 0; i < size; i++) {
        for (j = i; j < size; j++) {
            if (!string.includes(s[j]))
                string.push(s[j]);
            else
                break;
        }
        let len = string.length
        if(len > max)
            max = len;
        string = [];
        if(j == size) break;
    } 
    return max;
}
