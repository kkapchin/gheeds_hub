function feast(beast, dish) {
    const beastNameLetters = beast.split(' ').join('').split('');
    const beastFirstLetter = beastNameLetters[0];
    const beastLastLetter = beastNameLetters[beastNameLetters.length - 1];
    
    const dishNameLetters = dish.split(' ').join('').split('');
    const dishFirstLetter = dishNameLetters[0];
    const dishLastLetter = dishNameLetters[dishNameLetters.length - 1];
    
   if(beastFirstLetter === dishFirstLetter) {
     return beastLastLetter === dishLastLetter;
   }
   return false;
}
