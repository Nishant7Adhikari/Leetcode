/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let string = [];
//     let size = s.length;
//     let max = 0;
//     let j;
//     for (let i = 0; i < size; i++) {
//         for (j = i; j < size; j++) {
//             if (!string.includes(s[j]))
//                 string.push(s[j]);
//             else
//                 break;
//         }
//         let len = string.length
//         if(len > max)
//             max = len;
//         string = [];
//         if(j == size) return max;
//     }
//     return max
// }
var lengthOfLongestSubstring = function(s) {
    let window = [];
    let max = 0;

    for (let right = 0; right < s.length; right++) {
        let currentChar = s[right];
        while (window.includes(currentChar)) {
            window.shift();
        }
        window.push(currentChar);
        if (window.length > max) {
            max = window.length;
        }
    }

    return max;
};