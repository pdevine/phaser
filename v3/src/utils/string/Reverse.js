/**
* Takes the given string and reverses it, returning the reversed string.
* For example if given the string `Atari 520ST` it would return `TS025 iratA`.
*
* @method Phaser.Utils.reverseString
* @param {string} string - The string to be reversed.
* @return {string} The reversed string.
*/
var ReverseString = function (string)
{
    return string.split('').reverse().join('');
};

module.exports = ReverseString;
