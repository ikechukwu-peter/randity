


// Create a string of random alphanumeric characters, of a given length
let createRandomString = function (strLength) {
    strLength = typeof strLength == "number" && strLength > 0 ? strLength : false;
    if (strLength) {
        // Define all the possible characters that could go into a string
        const possibleCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

        // Start the final string
        let str = "";
        for (i = 1; i <= strLength; i++) {
            // Get a random charactert from the possibleCharacters string
            let randomCharacter = possibleCharacters.charAt(
                Math.floor(Math.random() * possibleCharacters.length)
            );
            // Append this character to the string
            str += randomCharacter;
        }
        // Return the final string
        return str;
    } else {
        throw new Error({ Error: 'String Length  is not a number', })
    }
};

module.exports = createRandomString;