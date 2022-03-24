//When i reverse the words, check if the result is the same that input
//palindrome('abba') === true
//palindrome('abcdefg') ===false
function palindrome(str) {
    const value =  str.split('').reverse().join('');
    return value === str;
}