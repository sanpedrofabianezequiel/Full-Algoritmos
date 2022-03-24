// function([100,-40,500,-124,0,21,7])
// [ -124, -40, 0, 7, 21, 100, 500 ]

function selectionSort(arr) {
    for(let i = 0;i<arr.length;i++){
        let indexOfMin = i;
        
        for(let j = i+1;j<arr.length;j++){//Si el numero que yo pensaba en la posicion indexOfMin
            if(arr[j] < arr[indexOfMin]){// es mejor al que habia definido switcheo
                indexOfMin = j;
            }
        }
        
        
        if(indexOfMin !== i){// si el numero menro actual es diferente  ala posicion que defini como minimo
            let lesser =  arr[indexOfMin];//creo una variable temporal con el nuevo numero menor
            arr[indexOfMin] = arr[i];//el valor donde encontre la menor posicion cambiara de lugar con 
                                        //la posicion recorrida. y CAMBIARAN DE LUGAR
            arr[i] = lesser;//el primer elemento recorrido del PRIMER FOR, se le asigna  el  MENOR valor ENCONTRADO               //para la posicion recorrida actual
        }
    }
    
    return arr;
}
