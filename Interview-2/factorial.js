function findFactorialIterative(number) { //BigO(n)
    let answer = 1;
    // you actually no longer need the if statement because of the for loop
    // if (number === 2) {
    //   answer = 2;
    // }
    for (let i = 2; i <= number; i++) {
      answer = answer * i;
    }
    return answer;
  }
  
  function findFactorialRecursive(number) {//BigO(n)
    if(number === 2) {
      return 2;
    }
    return number * findFactorialRecursive(number - 1)
  }
  
  findFactorialIterative(5);
  findFactorialRecursive(5);
  //RETURN 120 => 5 * 4 * 3 * 2 * 1
  //If you want, try to add a base case condition for the recursive solution if the parameter given is less than 2