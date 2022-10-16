function findOutlier(integers){
    const odds = integers.filter((number) => (Math.abs(number) % 2) > 0);
    const evens = integers.filter((number) => (Math.abs(number) % 2) === 0);
    if(odds.length < 2) {
      return odds[0];
    } else {
      return evens[0];
    }
}