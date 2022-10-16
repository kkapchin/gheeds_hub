function findMissingLetter(array) {
    const alphabet = ['a','b','c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A','B','C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const row = alphabet.slice(alphabet.indexOf(array[0]), alphabet.indexOf(array[array.length - 1]) + 1);
    console.log(array)
    console.log(row)
    array.map((letter) => {
      row.splice(row.indexOf(letter), 1);
    });
    return row.join('');
}