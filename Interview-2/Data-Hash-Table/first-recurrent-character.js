//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {//O(1)
    for (let i = 0; i < input.length; i++) {
      for (let j = i; j < input.length; j++) {
        if(input[i] === input[j+1]) { //comparo con el numero siguiente
          return input[i];
        }
      }
    }
    return undefined
  }
  //***Recurrente el primer valor encontrado */
  //Recorro el array y voy agregado al objeto, valores
  //Cuando una key se repetie ES RECURRENTE Y RETORNO ESE
  function firstRecurringCharacter2(input) {//O(n)
    let map = {};
    for (let i = 0; i < input.length; i++) {
      if (map[input[i]] !== undefined) { //Si ya existe valor en la key, es Recurrente
        return input[i]
      } else {
        map[input[i]] = i; //Si no existe, creo la key con el valor del Loop,
      }
    }
    return undefined
  }
  
  firstRecurringCharacter2([1,5,5,1,3,4,6])
  
  
  //Bonus... What if we had this:
  // [2,5,5,2,3,5,1,2,4]
  // return 5 because the pairs are before 2,2