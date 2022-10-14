function isPangram(string){
    const ALPHABET_LENGTH = 26;
    const regex = /[a-z]/g;
    return [...new Set(string.toLowerCase().match(regex))].length === ALPHABET_LENGTH;
}