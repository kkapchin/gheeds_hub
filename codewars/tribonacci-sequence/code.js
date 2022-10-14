function tribonacci(signature,n){
    if(n === 0) {
      return [];
    } else if(n < 3) {
      return signature.slice(0, n);
    } else if(n < 4) {
      return signature;
    } else {
      const tribs = tribonacci(signature.slice(), n - 1);
      tribs.push(tribs.slice(-3)[0] + tribs.slice(-3)[1] + tribs.slice(-3)[2]);
      return tribs;
    }
}
