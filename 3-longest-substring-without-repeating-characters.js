/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let string = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let current = s[i];

        while(string.includes(current))
            string.shift();
        
        string.push(current)
        if(string.length > max)
            max = string.length;
    }
    return max
}