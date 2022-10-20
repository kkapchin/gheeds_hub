function rot13(message) {
    const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.split('');
    const regex = /^[a-z]/i;
    return message.split('').map((letter) => {
        if(!regex.test(letter)) {
            console.log(letter)
            return letter;
        } else if (uppercaseAlphabet.includes(letter)) {
            return uppercaseAlphabet[uppercaseAlphabet.indexOf(letter) + 13];
        } else {
            return lowercaseAlphabet[lowercaseAlphabet.indexOf(letter) + 13];
        }
    }).join('');
}