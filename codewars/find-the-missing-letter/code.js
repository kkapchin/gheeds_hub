function findMissingLetter(array) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const row = alphabet.slice(alphabet.indexOf(array[0]), alphabet.indexOf(array[array.length - 1]) + 1);
    console.log(array)
    console.log(row)
    array.map((letter) => {
      row.splice(row.indexOf(letter), 1);
    });
    return row.join('');
}